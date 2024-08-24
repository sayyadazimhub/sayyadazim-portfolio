document.getElementById('downloadBtn').addEventListener('click', function() {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    const resumeUrl = 'path/to/your/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Your_Resume.pdf'; // This is the default filename
    link.click();
});