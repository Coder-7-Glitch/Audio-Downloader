async function call() {
    let video = document.getElementById('url').value

    const url = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/custom/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLjyCyatq5XE&quality=${video}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '77cd0395demshd239640bbf776f3p1c37d7jsnd9e1e23a6474',
            'x-rapidapi-host': 'youtube-mp3-downloader2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById("download-btn").innerHTML = `<a href="${result.dlink}">download</a>`
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
document.getElementById('btn').addEventListener('click', call)