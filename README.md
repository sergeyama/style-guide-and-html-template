# HTML, CSS, JS style-guide

## Зачем это нужно?


* Повышается читабельность кода  
* Повторное использование
* Понятная структура верстки

> Главная цель этого гайда, чтобы проект был написан в едином стиле при наличии множества разработчиков.

## Методология

Подход основан на методологии [БЭМ](https://ru.bem.info/methodology/), разработанной в Яндексе.  
Суть заключается в принципе разделения интерфейса на независимые блоки.  
Атрибут `class` используется для классификации БЭМ-сущности.   
Существуют три компонента: блок, элемент, модификатор.

> Блок - функционально независимый компонент, который можно использовать повторно.  
> Название блока харктеризует смысл (Что это?).

Ключевые особенности:
* вложенная структура;
* свободное перемещение;
* повторное использование.

> Элемент - составная часть блока, которая не может использоваться в отрыве от него.  
> Название блока харктеризует смысл (Что это?).  
> Имя задается по схеме `имя-блока__имя-элемента`, где для разделения используется два подчеркивания.

Ключевые особенности:
* не может быть использована вне блока;
* элементы можно вкладывать в друг друга;
* принадлежит только одному блоку.

> Модификатор - БЭМ-сущность, определяющая внешний вид, состояние и поведение блока или элемента.  
> Название модификатора характеризует внешний вид, размер или поведение.  
> Имя задается по схеме `имя-блока__имя-элемента--имя-модификатора`, где для разделения используется два тире.

Ключевые особенности:
* использование опционально;
* количество не ограничено;
* могут изменяться в процессе работы блока.

Пример шапки сайта с применением БЭМ.  
> HTML

```html
<div class="header"> <!-- блок header -->
    <!-- элемент блока header, является контейнером для отделения верхней части шапки от меню -->
    <div class="header__top"> 
        <a class="logo" href="/" title="ITWebNet">ITWebNet</a> <!-- блок logo -->
        <form class="search"> <!-- блок search -->
            <input class="search__input"> <!-- элемент блока search -->
            <button class="search__button"></button> <!-- элемент блока search -->
        </form>
    </div>
    <div class="main-menu"> <!-- блок main-menu -->
        <!-- элемент блока main menu с модификатором -->
        <a class="main-menu__item main-menu__item--active" title="Главная">Главная</a> 
        <a class="main-menu__item" title="Новости">Новости</a> <!-- элемент блока main menu -->
        <!-- еще элементы... -->
    </div>
</div>
```
>LESS

```less
.header {
    margin-bottom: 30px;

    &__top {
        display: flex;
        justify-content: space-between;
    }
}

.logo {
    //стили для logo
}

.search {
    //стили для search
}

.main-menu { //блок
    display: flex;
    flex-wrap: wrap;

    &__item { //элемент
        padding: 5px 10px;
        color: blue;

        &--active { color: red; } //модификатор
    }
}
```

## Правила для HTML

> Именование классов.
```html
<!-- Блок -->
<div class="block"></div>
<!-- Елемент -->
<div class="block__element"></div>
<!-- Модификатор. !Не может быть единственным классом! -->
<div class="block block--mod"></div>
<div class="block__element block__element--mod"></div>
<!-- Приставка js для обозначения принадлежности к скриптам. Ставится первым дублируя основной класс. -->
<div class="js_block block"></div>
```
> Порядок атрибутов. Первым всегда является `class`, далее можно указывать атрибуты в любом порядке.
```html
<img class="logo" src="/img/logo.png" alt="Логотип компании" title="Логотип"/>
```
> Когда использовать блок, а когда элемент?
```html
<!-- Если встает выбор между блоком и элементом ныжно задать себе вопрос - будет ли этот компонент использоваться где-то еще. Если есть сомнения, то выбор делать всегда в пользу блока. -->
```
> Кнопки в формах.
```html
<!-- В формах использовать тег button для отправки формы. -->
<form action=""> 
    <button><svg>Иконка</svg><span>Отправить</span></button>
</form>
```
> Продолжение следует...
```html
...
```

## Правила для CSS

> При группировке селекторов помещайте каждый селектор на отдельную строку.
```css
a,
a:focus,
a:visited {
    text-decoration: none;
    color: blue;
}
```
> Порядок объявления.
```css
.menu {
    /* Позиционирование */
    position: fixed;
    top: 0;

    /* Отображение */
    display: flex;
    padding: 10px;
    margin-bottom: 30px;

    /* Шрифты */
    font-size: 16px;
    font-weight: bold;

    /* Прочее */
    transition: all .3s ease;
}
```
> Одиночные объявления.
```css
.unvisible { display: none; }
```
> Очередность написания в контексте селектора.
```less
.page-header {
    //Стили блока
    position: relative;
    display: block;
    
    //Медиа
    @media (min-width: $screen-lg) { ... }
    
    //Псевдоселекторы
    &:before { ... }
    
    //Элементы
    &__item {
        display: block;
  
        &:before { ... }
  
        @media (min-width: $screen-md) { ... }
    }
    
    //Модификаторы
    &--large {
  
        .page-header__item { ... }
  
        @media (min-width: $screen-md) { ... }
    }  
}
```
> Переменные. Именование в стиле БЭМ.
```less
$color-main:                  #0275d8;
$color-success:               #5cb85c;
$color-danger:                #d9534f;
 
$text-color:                  $gray-darkest;
$text-color--muted:           $gray;
 
$font-size:                   1.6rem;
$font-size--h1:               3rem;
$font-size--small:            0.75em;
 
$line-height:                 1.375em;
 
$font-family:                 'Roboto', Arial, sans-serif;
 
$screen-xs:                   0;
$screen-sm:                   480px;
$screen-md:                   768px;
$screen-lg:                   992px;
$screen-xl:                   1200px;
```
> Стили для ссылок по умолчанию.
```less
a {
    &:focus,
    &:visited {
        border-bottom: 1px solid transparent; //Подчеркивание ссылок через нижнюю границу
        color: black; //Цвет не меняется при переходе
        outline: none; //Убираем пунктирную рамку
        text-decoration: none; //Убирается стандартное подчеркивание
        transition: all .3s ease; //Стандартная анимация для ссылок
    }

    &:hover {
        border-bottom: 1px solid black;
        transition: all .3s ease;
    }
}
```
> Стили для кнопок.
```html
<!-- Текст внутри кнопки оборачивается в тег span -->
<a href="#"><span>Подробнее</span></a>
```
```less
a {
    &:focus,
    &:visited {
        //Стили для внешнего вида кнопки (цвет, форма и т.д.)       
    }

    &:hover {
        //Стили для внешнего вида при наведении
    }

    span {
        border-bottom: 1px solid transparent; //Подчеркивание ссылок через нижнюю границу
        transition: all .3s ease; //Стандартная анимация для ссылок

        &:hover {
            border-bottom: 1px solid black;
            transition: all .3s ease;
        }
    }
}
```
> Продолжение следует...
* Правила написания `@media`, mobile-first
* Для каждого блока отдельный `less` файл
