document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("pdfModal");
    var btns = document.querySelectorAll(".open-pdf-btn");
    var span = document.getElementsByClassName("close")[0];
    var pdfViewer = document.getElementById("pdfViewer");
    var viewInNewTabBtn = document.getElementById("viewInNewTabBtn");
    var downloadBtn = document.getElementById("downloadBtn");
    var logoutBtn = document.getElementById("logoutBtn");

    btns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var pdfSrc = btn.getAttribute("data-src");
            pdfViewer.setAttribute("src", pdfSrc);
            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    };

    viewInNewTabBtn.onclick = function() {
        var pdfSrc = pdfViewer.getAttribute("src");
        window.open(pdfSrc, "_blank");
    };

    downloadBtn.onclick = function() {
        var pdfSrc = pdfViewer.getAttribute("src");
        var a = document.createElement("a");
        a.href = pdfSrc;
        a.download = pdfSrc.split("/").pop(); // Extracts the filename for download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

   
    logoutBtn.onclick = function() {
        // Perform logout action (e.g., clear session data)
        alert('Logging out'); // For debugging purposes
        window.location.href = "index.html";
    };

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
