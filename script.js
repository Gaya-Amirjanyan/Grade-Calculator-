function CalculateGrade() {
  var ParticipationPercent=parseInt(document.getElementById("ParticipationPercent").innerHTML)
  var ParticipationGrade=parseFloat(document.getElementById("ParticipationGrade").value)
  var Participation=ParticipationPercent * ParticipationGrade/100

  var HomeworkPercent=parseInt(document.getElementById("HomeworkPercent").innerHTML)
  var HomeworkGrade=parseFloat(document.getElementById("HomeworkGrade").value)
  var Homework= HomeworkPercent * HomeworkGrade/100

  var ProjectMilestone1Percent=parseInt(document.getElementById("ProjectMilestone1Percent").innerHTML)
  var ProjectMilestone1Grade=parseFloat(document.getElementById("ProjectMilestone1Grade").value)
  var ProjectMilestone1 = ProjectMilestone1Percent * ProjectMilestone1Grade/100

  var ProjectMilestone2Percent=parseInt(document.getElementById("ProjectMilestone2Percent").innerHTML)
  var ProjectMilestone2Grade=parseFloat(document.getElementById("ProjectMilestone2Grade").value)
  var ProjectMilestone2 = ProjectMilestone2Percent * ProjectMilestone2Grade/100

  var ProjectFinalPercent=parseInt(document.getElementById("ProjectFinalPercent").innerHTML)
  var ProjectFinalGrade=parseFloat(document.getElementById("ProjectFinalGrade").value)
  var ProjectFinal = ProjectFinalPercent * ProjectFinalGrade/100

  var CurrentGrade = Participation + Homework + ProjectMilestone1 + ProjectMilestone2 + ProjectFinal
 console.log(CurrentGrade)

  document.getElementById("CurrentGrade").innerHTML=CurrentGrade
}
