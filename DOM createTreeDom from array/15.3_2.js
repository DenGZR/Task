function getUniqueTags() {
    // debugger
    var arrayTag = document.getElementsByTagName("*");
    var UniqueTags = {};
    for (var i = 0; i < arrayTag.length; i++) {
        UniqueTags[arrayTag[i].nodeName] = true;
    }

    return Object.keys(UniqueTags);
}

