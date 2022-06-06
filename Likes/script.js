console.log("page loading...");

var likes = [9, 12, 9];
                                     

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + " like(s)";
}

like(id);