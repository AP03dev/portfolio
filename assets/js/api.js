async function fetchProfileData(){
    const url = 'https://github.com/AP03dev/js-developer-portfolio/blob/main/data/profile.json';

    const fetching = await fetch(url) 
    return await fetching.json()
}