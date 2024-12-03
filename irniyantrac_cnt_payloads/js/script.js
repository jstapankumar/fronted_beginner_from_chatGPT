function copyPayload() {
    // Get the text from the payload
    const payloadText = document.getElementById("payloadText").innerText;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(payloadText).then(function() {
        // Visual feedback: Change the button text and color to indicate copy success
        const copyButton = document.querySelector(".copy-btn");
        copyButton.innerHTML = 'Copied! <span class="checkmark">✔️</span>'; // Adding checkmark icon
        copyButton.style.backgroundColor = "#4CAF50"; // Success green
        copyButton.style.color = "white";

        // Reset the button after 1.5 seconds to its original state
        setTimeout(function() {
            copyButton.innerHTML = "Copy";
            copyButton.style.backgroundColor = "#4CAF50"; // Default green
        }, 1500); // Reset after 1.5 seconds
    }).catch(function(err) {
        console.error("Failed to copy text: ", err);
    });
}
