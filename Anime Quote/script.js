document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    const quoteParagraph = document.querySelector('p:nth-of-type(1)');
    const characterParagraph = document.querySelector('p:nth-of-type(2)');
    const animeParagraph = document.querySelector('p:nth-of-type(3)');

    button.addEventListener('click', async function () {
        try {
            const response = await fetch('https://animechan.xyz/api/random');
            const data = await response.json();

            quoteParagraph.textContent = 'Quote: ' + data.quote;
            characterParagraph.textContent = 'Said By Character: ' + data.character;
            animeParagraph.textContent = 'Anime: ' + data.anime;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});
