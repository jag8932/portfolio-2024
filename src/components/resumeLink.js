
export const ResumeLink = () => {
    const onButtonClick = () => {
        const pdfUrl = "Jacob Goodwillie Resume 2024.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Jacob_Goodwillie_Resume";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <button className="Resume-link" onClick={onButtonClick}>
           <strong>Resume</strong> 
        </button>
    )
}