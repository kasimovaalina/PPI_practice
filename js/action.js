function buttonClick1(s){
	if (s.innerHTML == "Явность"){
        textarea = document.getElementById("textarea1");
        textarea.innerHTML = "Программа должна помогать выполнить задачу, а не становиться этой задачей.";
    } else if (s.innerHTML == "Уважение"){
        textarea = document.getElementById("textarea1");
        textarea.innerHTML = "При работе с программой пользователь не должен ощущать себя дураком.";
    } else if (s.innerHTML == "Прозрачность"){
        textarea = document.getElementById("textarea1");
        textarea.innerHTML = "Программа должна работать так, чтобы пользователь не считал компьютер дураком.";

    } else if (s.innerHTML == "Функционал"){
        textarea = document.getElementById("textarea3");
        textarea.innerHTML = "Функциональное описание";

    } else if (s.innerHTML == "Установка"){
        textarea = document.getElementById("textarea3");
        textarea.innerHTML = "Документ по инсталляции системы";

    } else if (s.innerHTML == "Введение"){
        textarea = document.getElementById("textarea3");
        textarea.innerHTML = "Вводное руководство,";

    } else if (s.innerHTML == "Администратору"){
        textarea = document.getElementById("textarea3");
        textarea.innerHTML = "Руководство администратора";

    } else if (s.innerHTML == "Пользователю"){
        textarea = document.getElementById("textarea3");
        textarea.innerHTML = "Руководство пользователя";

    } else if (s.innerHTML == "Справка"){
        textarea = document.getElementById("textarea3");
        textarea.innerHTML = "Справочное руководство";

    } else if (s.innerHTML == "Профессионализм"){
        textarea = document.getElementById("textarea4");
        textarea.innerHTML = "Профессиональный уровень пользователя";
    } else if (s.innerHTML == "Разнородность"){
        textarea = document.getElementById("textarea4");
        textarea.innerHTML = "Учёт разнородности пользователей";

    } else if (s.innerHTML == "Знания"){
        textarea = document.getElementById("textarea4");
        textarea.innerHTML = "Учёт знаний";

    } else if (s.innerHTML == "Опыт"){
        textarea = document.getElementById("textarea4");
        textarea.innerHTML = "Опыт пользователя";
    }

}