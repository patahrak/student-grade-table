class App {
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
  }

  handleGetGradesError(error) {
    console.error("error");
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
  }

  getGrades() {
    $.ajax (
      {
      type: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      dataType: "json",
      headers: {
        "X-Access-Token": "yKye2vVs",
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  start() {
    this.getGrades();
  }
}
