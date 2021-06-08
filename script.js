const getQuote = async () => {
    const response = await fetch("https://zenquotes.io/api/quotes");
    if (response.ok) {
        const jsonResponse = await response.json();
        console.log();
    }
}