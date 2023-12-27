window.onscroll = function() {notifySidebar()};

function notifySidebar() {

    clearSidebarHighlights();

    var resumeRect = document.getElementById("resume").getBoundingClientRect();
    var projectsRect = document.getElementById("projects").getBoundingClientRect();
    var experienceRect = document.getElementById("experience").getBoundingClientRect();

    if (resumeRect.top + resumeRect.height <= document.documentElement.clientHeight) {
        document.getElementById("resume-label").style.color = "black";
        document.getElementById("resume-label").children[0].style.color = "black";
    } else if (projectsRect.top + projectsRect.height <= document.documentElement.clientHeight) {
        document.getElementById("projects-label").style.color = "black";
        document.getElementById("projects-label").children[0].style.color = "black";
    } else if (experienceRect.top + experienceRect.height <= document.documentElement.clientHeight) {
        document.getElementById("experience-label").style.color = "black";
        document.getElementById("experience-label").children[0].style.color = "black";
    } else {
        document.getElementById("meet-nate-label").style.color = "black";
        document.getElementById("meet-nate-label").children[0].style.color = "black";
    }
}

function clearSidebarHighlights() {
    // Meet Nate
    document.getElementById("meet-nate-label").style.color = "gray";
    document.getElementById("meet-nate-label").children[0].style.color = "gray";
    // Experience
    document.getElementById("experience-label").style.color = "gray";
    document.getElementById("experience-label").children[0].style.color = "gray";
    // Projects
    document.getElementById("projects-label").style.color = "gray";
    document.getElementById("projects-label").children[0].style.color = "gray";
    // Resume
    document.getElementById("resume-label").style.color = "gray";
    document.getElementById("resume-label").children[0].style.color = "gray";
}