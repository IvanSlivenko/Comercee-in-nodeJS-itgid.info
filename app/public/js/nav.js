console.log('nav.js');

function getCategoryList(){ 
    fetch('/get-category-list', {
        method: 'POST'
    }
    ).then(function(response) { 
        console.log(response);
        return response.text(); 
        }
    ).then(function (body) { 
        console.log(body);
        showCategoryList(JSON.parse(body)); 
        }
    )
}
function showCategoryList(data) { 
    console.log(data);
    let out = '<ul class="category-list"><li><a href="/">Main</a></li>';
    for (let i = 0; i < data.length; i++) { 
        out += `<li><a href="/cat?id=${data[i]['id']}">${data[i]['category']}</a></li>`;
    }
    out += '</ul>';
    document.querySelector("#category-list").innerHTML = out;
}

getCategoryList();

