
document.getElementById('d-btn1').addEventListener('click', function (event) {
    event.preventDefault;
    let donation = checkInput('d-in1');
    let balance = parseFloat(document.getElementById('t-donation').innerText);
    if(balance < donation){
        alert('Not Enough balance');
    }
    else{
        let total = balance - donation;
        document.getElementById('t-donation').innerText = total;
        let total2 = parseFloat(document.getElementById('donation1').innerText) + donation;
        document.getElementById('donation1').innerText = total2;
    
        if (donation !== 0) {
            document.getElementById('alart1').style.display = 'block';
            document.getElementById('alart2').style.display = 'block';
    
            const div = document.createElement('div')
            div.className = 'donation-history';
            const p1 = document.createElement('p');
            p1.className = 'h-first';
            p1.innerText = `${donation} Taka is Donated for famine-2024 at Noakhali,Bangladesh`;
            div.appendChild(p1);
            const p = document.createElement('p');
            p.className = 'h-second';
            p.innerText = dateTime();
            div.appendChild(p);
            document.getElementById('d-history').appendChild(div);
        }
    }
    document.getElementById("d-in1").value = "";

})
document.getElementById('d-btn2').addEventListener('click', function (event) {
    event.preventDefault;
    let donation = checkInput('d-in2');
    let balance = parseFloat(document.getElementById('t-donation').innerText);
    if(balance < donation){
        alert('Not Enough balance');
    }
    else{
        let total = balance - donation;
        document.getElementById('t-donation').innerText = total;
        let total2 = parseFloat(document.getElementById('donation2').innerText) + donation;
        document.getElementById('donation2').innerText = total2;
    
        if (donation !== 0) {
            document.getElementById('alart1').style.display = 'block';
            document.getElementById('alart2').style.display = 'block';
    
            const div = document.createElement('div')
            div.className = 'donation-history';
            const p1 = document.createElement('p');
            p1.className = 'h-first';
            p1.innerText = `${donation} Taka is Donated for famine-2024 at Feni,Bangladesh`;
            div.appendChild(p1);
            const p = document.createElement('p');
            p.className = 'h-second';
            p.innerText = dateTime();
            div.appendChild(p);
            document.getElementById('d-history').appendChild(div);
        }
    }
    document.getElementById("d-in2").value = "";
})
document.getElementById('d-btn3').addEventListener('click', function (event) {
    event.preventDefault;
    let donation = checkInput('d-in3');
    let balance = parseFloat(document.getElementById('t-donation').innerText);
    if(balance < donation){
        alert('Not Enough balance');
    }
    else{
        let total = balance - donation;
        document.getElementById('t-donation').innerText = total;
        let total2 = parseFloat(document.getElementById('donation3').innerText) + donation;
        document.getElementById('donation3').innerText = total2;
    
        if (donation !== 0) {
            document.getElementById('alart1').style.display = 'block';
            document.getElementById('alart2').style.display = 'block';
    
            const div = document.createElement('div')
            div.className = 'donation-history';
            const p1 = document.createElement('p');
            p1.className = 'h-first';
            p1.innerText = `${donation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
            div.appendChild(p1);
            const p = document.createElement('p');
            p.className = 'h-second';
            p.innerText = dateTime();
            div.appendChild(p);
            document.getElementById('d-history').appendChild(div);
        }
    }
    document.getElementById("d-in3").value = "";
})
document.getElementById('a-btn').addEventListener('click', function (event) {
    event.preventDefault;
    document.getElementById('alart1').style.display = 'none';
    document.getElementById('alart2').style.display = 'none';
})
document.getElementById('h-btn').addEventListener('click', function (event) {
    event.preventDefault;
    document.getElementById('main').style.display = 'none';
    document.getElementById('foot').style.display = 'none';
    document.getElementById('history').style.display = 'block';
    document.getElementById('btn-donate').style.backgroundColor = 'rgb(243 244 246)'
    document.getElementById('h-btn').style.backgroundColor = 'rgb(134 239 172)'

})
document.getElementById('btn-donate').addEventListener('click', function (event) {
    document.getElementById('main').style.display = 'block';
    document.getElementById('foot').style.display = 'block';
    document.getElementById('history').style.display = 'none';
    document.getElementById('h-btn').style.backgroundColor = 'rgb(243 244 246)'
    document.getElementById('btn-donate').style.backgroundColor = 'rgb(134 239 172)'
})