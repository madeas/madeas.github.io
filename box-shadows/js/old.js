            document.getElementById('ch_btn-one').onclick = e => document.querySelector('.container').style.background =
                document.getElementById('bg-card').value;
            document.getElementById('ch_btn-two').onclick = e => {
                document.querySelector('.container').style.color = document.getElementById('color').value;

                let lnks = document.querySelectorAll('.container a.lnk');

                [].slice.call(lnks).forEach(function (elem) {
                    elem.style.color = document.getElementById('color').value;
                    elem.style.borderBottomColor = document.getElementById('color').value;
                });
            }
            
            document.getElementById('ch_btn-three').onclick = e => {
                document.querySelector('.container').style.background = '';
                document.querySelector('.container').style.color = '';
                let lnks = document.querySelectorAll('a.lnk');
                [].slice.call(lnks).forEach(function (elem) {
                    elem.style.color = '';
                    elem.style.borderBottomColor = '';
                });
            }

            [].forEach.call(doc.querySelectorAll('.block'), function (node) {
                node.onmouseover = function () {
                    doc.querySelector('.card__content').style.boxShadow = getComputedStyle(node).boxShadow;
                }
                node.onmouseleave = function () {
                    doc.querySelector('.card__content').style.boxShadow = '';
                }
            });