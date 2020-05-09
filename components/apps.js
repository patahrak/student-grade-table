class App {
  constructor(gradeTable) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
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
