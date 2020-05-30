//Задание №1
let task01_cont = document.getElementById("task01");
for(let i=0; i<task01_cont.children.length;i++) {
    let div_child = task01_cont.children[i];
    div_child.addEventListener("click",changeDivColor);
}

function changeDivColor(el) {
    //debugger;
    let target = el.srcElement;
    if(target.nodeName == "P") {
        target.parentElement.classList.toggle("task01-div_clicked");
    } else {
        target.classList.toggle("task01-div_clicked");
    }
}

//Задание #2
function ClickChanger(el) {
    el.innerText = parseInt(el.innerText) + 1;
}

//Задание №3
let task03_form = document.getElementById("task03-new_comment_form");
let task03_comments = document.getElementById("task03-comments");
function task03submit(el) {
    let text_comment = task03_form["task03-new_comment"].value;
    if(text_comment!="") {
        let date_options = {
            day: 'numeric', month: 'long', year: 'numeric',  
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: false
          };
        let date_str = new Date().toLocaleDateString("ru-RU",date_options);
        let new_div = document.createElement("div");
        new_div.classList.add("task03-comment");
        
        //создаем блок аватара
        let div_avatar = document.createElement("div");
        div_avatar.classList.add("task03-comment_avatar");
        let avatar = document.createElement("img");
        avatar.setAttribute("src","./img/no_avatar.png");
        div_avatar.appendChild(avatar);
        new_div.appendChild(div_avatar);
        //Добавляем блок инфо и текст комментария
        let div_box = document.createElement("div");
        div_box.classList.add("task03-comment_box");
        let info_box = document.createElement("div");
        info_box.classList.add("task03-comment_info");
        let p_author = document.createElement("p");
        p_author.innerText = "автор: Админ";
        let p_date = document.createElement("p");
        p_date.innerText = "дата: " + date_str;
        info_box.appendChild(p_author);
        info_box.appendChild(p_date);
        div_box.appendChild(info_box);
        new_div.appendChild(div_box);

        let comment_text = document.createElement("p");
        comment_text.classList.add("task03-comment_text");
        comment_text.innerText = text_comment;
        div_box.appendChild(comment_text);
        task03_comments.appendChild(new_div);

        comment_text.scrollIntoView();
    }
    task03_form["task03-new_comment"].value = "";
}

//Задание №4
let books = [
    {
        артикул: 1,
        автор: "Сапковский Анджей",
        наименование: "Последнее желание",
        описание: "Ведьмак – это мастер меча и мэтр волшебства, ведущий непрерывную войну с кровожадными монстрами, которые угрожают покою сказочной страны. «Ведьмак» – это мир на острие меча, ошеломляющее действие, незабываемые ситуации, великолепные боевые сцены.",
        картинка: ""
    },
    {
        артикул: 2,
        автор: "Кинг Стивен",
        наименование: "Интистут",
        описание: "Еще недавно у двенадцатилетнего Люка Эллиса была вполне привычная жизнь: школа, обеды с родителями в любимой пиццерии, вечера в компании лучшего друга… Пока одним июньским утром он не просыпается в собственной комнате, вот только в ней нет окон и находится она в тщательно укрытом от всего мира",
        картинка: ""
    },
    {
        артикул: 3,
        автор: "Стругацкие А и Б",
        наименование: "Пикник на обочине",
        описание: "Пожалуй, в истории современной мировой фантастики найдется не так много произведений, которые оставались бы популярными столь долгое время. Повесть послужила основой культового фильма Тарковского «Сталкер»; через три десятилетия появились не менее культовая компьютерная игра с тем же названием и...",
        картинка: ""
    },
    
    {
        артикул: 4,
        автор: "Георгий Смородинский",
        наименование: "Семнадцатое обновление",
        описание: "Сверхпопулярная онлайн-игра «Мир Аркона» получила семнадцатое обновление. Отныне все ощущения, которые пользователи, погруженные в индивидуальные капсулы, испытывают в процессе игры, стали неотличимы от реальных. Это в полной мере прочувствовал Роман Кожевников, не по своей воле оказавшийся в Арконе. И не просто в Арконе, а в самом страшном его месте – Землях Демонов. Слившись со своим персонажем, демоном Крианом, Роман должен не только выжить, но и отомстить за свое заточение в виртуальной реальности, где достоверность болевых ощущений достигла ста процентов…",
        картинка: ""
    },
    {
        артикул: 5,
        автор: "Алексей Осадчук",
        наименование: "Цитадель",
        описание: "«Если ты доблестный воин, желающий совершить подвиг, – нам всегда нужен еще один герой на крепостных стенах Марагарской Цитадели! Ты могущественный маг, ищущий забытые знания? Посети Древнюю Библиотеку! И тебе откроются многие тайны!",
        картинка: ""
    },
    {
        артикул: 6,
        автор: "Дем Михайлов",
        наименование: "Господство кланов",
        описание: "Огромный мир, наполненный приключениями и древними тайнами, чудовищами, жаждущими твоей смерти. Мир, в котором каждый может добиться исполнения своих самых заветных желаний и стать кем угодно – удачливым в делах торговцем, мудрым отшельником, отважным воином или же боевым магом, которому подвластны разрушительные стихии. Но не следует ожидать, что твой путь к исполнению мечты будет легким и безоблачным. Путь к вершине очень долог, если ты вообще до нее дойдешь.",
        картинка: ""
    }
];

function crtTableElement(prntEl, type, text) {
    let tEl = document.createElement(type);
    if(text!=undefined) {
        tEl.innerText = text;
    }
    if(type=="table"){
        tEl.classList.add("task04");
    }
    prntEl.appendChild(tEl);
    return tEl;
}

function setTableStyle() {
    let StyleText =  `table.task04{text-decoration: none;border-collapse:collapse;width:100%;text-align:center;}
	table.task04 th{width:auto; font-weight:normal;font-size:14px; color:#ffffff;background-color:#354251;}
	table.task04 td{font-size:13px;color:#000000;text-align:left;}
    table.task04 td,table.task04 th{white-space:pre-wrap;padding:10px 5px;line-height:13px;vertical-align: middle;border: 1px solid #354251;}	
    table.task04 tr:hover{background-color:#e0e0e0}
    table.task04 tr:hover td{color:#000000;cursor:default;}`;

    //let styleEl = document.getElementsByTagName("style");
    let styleEl = document.getElementById("table-style");
    if(styleEl==undefined){
        let styleEl = document.createElement("style");
        styleEl.type = "text/css";
        styleEl.innerHTML = StyleText;
        styleEl.setAttribute("id", "table-style");
        document.getElementsByTagName("head")[0].appendChild(styleEl);
    } else {
        if(styleEl.innerHTML!=StyleText) {
            styleEl.innerHTML = StyleText;
        }
    }
}

function createTableBooks() {

    setTableStyle();

    let task04_container = document.getElementById("task04");
    task04_container.innerHTML="";
    //Создаем таблицу
    let tbl = crtTableElement(task04_container, "table");

    //Берем 0 элемент массива и выводим заголовок таблицы
    let tr = crtTableElement(tbl, "tr");
    for(let prop in books[0]) {
        crtTableElement(tr, "th", prop);    
    }

    //Создаем строки таблицы
    for(let i=0; i<books.length; i++) {
        let tr = crtTableElement(tbl, "tr");
        for(let prop in books[i]) {
           crtTableElement(tr, "td",  books[i][prop]);    
        }    
    }

}

createTableBooks();