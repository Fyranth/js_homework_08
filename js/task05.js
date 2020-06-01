function createData() {
    let leftbox = document.getElementById("left-container");
    leftbox.innerHTML='';
    let rightbox = document.getElementById("right-container");
    rightbox.innerHTML='';

    createNavTabs(leftbox);
    drawdata(leftbox.children[0].children[0]);
}

function createNavTabs(ElParent) {
    let nav = document.createElement("nav");
    nav.classList.add('navigation');

    for(let i=0; i<data.length; i++){
        let tabnav = document.createElement("nav");
        tabnav.classList.add("navigation-tab");
        tabnav.setAttribute("dataset-id", data[i]["id"]);
        tabnav.innerText = data[i]["name"];
        nav.appendChild(tabnav);

        tabnav.addEventListener('click', TabClickEvent);
    }
    ElParent.appendChild(nav);
}

function TabClickEvent(el) {
    let current = el.srcElement;
    drawdata(current);
}

function drawdata(el) {
    let rightbox = document.getElementById("right-container");
    rightbox.innerHTML='';

    let data_id = parseInt(el.attributes.getNamedItem("dataset-id").value);
    let boxdata = data[data_id];

    //Создадим контейнер без классов и стилей - чтобы по ходу в него помещать элементы и в конце его прицепить
    let container = document.createElement('div');

    //Создаем заголовок содержимого
    let header_block = document.createElement("h2");
    header_block.classList.add("header-block");
    header_block.innerText = boxdata['name'];
    container.appendChild(header_block);
    let br = document.createElement("hr");
    container.appendChild(br);

    //Выводим основное содержимое
    if(Array.isArray(boxdata['blocks'])) {
        for(let i=0; i<boxdata['blocks'].length; i++) {
            let block_data = boxdata['blocks'][i];
            createBlockData(container, block_data);
        }
    }
    //Рисуем данные на странице
    rightbox.appendChild(container);
}

function createBlockData(ParentEl, block_data) {
    
    if(block_data['type']=='p') {
        let new_el = document.createElement(block_data['type']);
        new_el.innerText = block_data['data'];
        new_el.classList.add('text');
        ParentEl.appendChild(new_el);
    } else if(block_data['type']=='img') {
        new_el = document.createElement('div');
        new_el.classList.add('div-img');
        let img = document.createElement('img');
        img.setAttribute('src', block_data['data']);
        img.setAttribute('label', block_data['label']);
        let img_p = document.createElement('p');
        img_p.innerText = block_data['label'];
        img_p.classList.add("img-p");
        new_el.appendChild(img);
        new_el.appendChild(img_p);
        ParentEl.appendChild(new_el);
    }
    
}