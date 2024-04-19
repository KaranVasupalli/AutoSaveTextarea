document.addEventListener('DOMContentLoaded', () => {
    try {
        const savedText = localStorage.getItem('savedText');
        if (savedText) {
            document.getElementById('text').value = savedText;
        }
    } catch (error) {
        console.error('Error retrieving data from local storage:', error);
    }
});

document.getElementById('text').addEventListener('input', (event) => {
    try {
        localStorage.setItem('savedText', event.target.value);
    } catch (error) {
        console.error('Error saving data to local storage:', error);
    }
});