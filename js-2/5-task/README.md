# 5 задание
Реализуйте функцию getUniqueFieldsValueFromObject, которая будет принимать два аргумента - объект и имя поля.
Функция должна вернуть отсортированный массив уникальных значений указанного поля из объекта, при условии, что в объекте могут содержаться другие объекты, массивы и т.д
Важно! Если тип значения поля, имя которого совпало с искомым является объектом - его значение также необходимо сохранить, а затем уйти вглубь данного объекта!
Для сортировки использоват следующую функцию (first, second) => first - second