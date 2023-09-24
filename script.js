let state = {
    "images": [
        {
            "id": "23",
            "name": "hmu for sukkerspinn",
            "fullName": "Images/23.jpg",
            "created": 1727105719000,
            "comments": []
        },
        {
            "id": "22",
            "name": "det er gotah",
            "fullName": "Images/22.jpg",
            "created": 1692296376000,
            "comments": []
        },
        {
            "id": "21",
            "name": "leid vekk, mann",
            "fullName": "Images/21.jpg",
            "created": 1686338263000,
            "comments": []
        },
        {
            "id": "20",
            "name": "gutta på butta",
            "fullName": "Images/20.jpg",
            "created": 1685974812000,
            "comments": []
        },
        {
            "id": "19",
            "name": "david under betongpinnen",
            "fullName": "Images/19.jpg",
            "created": 1684754412000,
            "comments": []
        },
        {
            "id": "18",
            "name": "heia fedrelandet",
            "fullName": "Images/18.jpg",
            "created": 1684321213000,
            "comments": []
        },
        {
            "id": "17",
            "name": "leo og aupairen",
            "fullName": "Images/17.jpg",
            "created": 1683945031000,
            "comments": []
        },
        {
            "id": "16",
            "name": "tjuvradd gjør forretninger",
            "fullName": "Images/16.jpg",
            "created": 1683410694000,
            "comments": []
        },
        {
            "id": "15",
            "name": "naver spiller på klaver",
            "fullName": "Images/15.jpg",
            "created": 1683407685000,
            "comments": []
        },
        {
            "id": "14",
            "name": "brodern svever",
            "fullName": "Images/14.jpg",
            "created": 1682869019000,
            "comments": []
        },
        {
            "id": "13",
            "name": "se på han da",
            "fullName": "Images/13.jpg",
            "created": 1682201202000,
            "comments": []
        },
        {
            "id": "12",
            "name": "tour de dans",
            "fullName": "Images/12.jpg",
            "created": 1682083800000,
            "comments": []
        },
        {
            "id": "11",
            "name": "grillings med databrus",
            "fullName": "Images/11.jpg",
            "created": 1681930934000,
            "comments": []
        },
        {
            "id": "10",
            "name": "powderday fòshoo",
            "fullName": "Images/10.jpg",
            "created": 1679742652000,
            "comments": []
        },
        {
            "id": "9",
            "name": "hun fra bygg og anlegg",
            "fullName": "Images/9.jpg",
            "created": 1679181323000,
            "comments": []
        },
        {
            "id": "8",
            "name": "valter hvitt",
            "fullName": "Images/8.jpg",
            "created": 1679177506000,
            "comments": []
        },
        {
            "id": "7",
            "name": "dårlige avgjørelser",
            "fullName": "Images/7.jpg",
            "created": 1679166040000,
            "comments": []
        },
        {
            "id": "6",
            "name": "addah, han kan skøyte",
            "fullName": "Images/6.jpg",
            "created": 1678982515000,
            "comments": []
        },
        {
            "id": "5",
            "name": "hvor er vannet?",
            "fullName": "Images/5.jpg",
            "created": 1675547158000,
            "comments": []
        },
        {
            "id": "4",
            "name": "crusern på tour de finans",
            "fullName": "Images/4.jpg",
            "created": 1675241245000,
            "comments": []
        },
        {
            "id": "3",
            "name": "yo",
            "fullName": "Images/3.jpg",
            "created": 1674852795000,
            "comments": []
        },
        {
            "id": "2",
            "name": "skolen ass, ikke helt min greie",
            "fullName": "Images/2.jpg",
            "created": 1673439656000,
            "comments": []
        },
        {
            "id": "1",
            "name": "hvor er syra?",
            "fullName": "Images/1.jpg",
            "created": 1667597597000,
            "comments": []
        }
    ]
};

function createAndAppendElement(tag, parent, options) {
    let newElement = document.createElement(tag);
    parent.append(newElement);
    if (!options) return newElement;
    if (options.attributes) {
        for (let attribute of options.attributes) {
            newElement.setAttribute(attribute.name, attribute.value);
        }
    }
    if (options.classes) {
        newElement.classList.add(options.classes.join(','))
    }
    if (options.innerHTML) newElement.innerHTML = options.innerHTML;
    return newElement;
}

function initiate(state) {
    let rootElement = document.querySelector("#box");
    let parentElement = rootElement; 
    for (let i = 0; i < state.images.length; i++) {
        let image = state.images[i];
        if (i % 5 === 0) {
            parentElement = createAndAppendElement('div', rootElement, {
                classes: [
                    'dream'
                ]
            });
        }
        createAndAppendElement('img', parentElement, {
            attributes: [
                {
                    'name': 'id',
                    'value': image.id
                },
                {
                    'name': 'src',
                    'value': image.fullName
                },
                {
                    'name': 'data-toggle',
                    'value': 'modal'
                },
                {
                    'name': 'data-target',
                    'value': '#imageModal'
                },
                {
                    'name': 'data-name',
                    'value': image.name
                },
                {
                    'name': 'data-created',
                    'value': image.created
                },
                {
                    'name': 'data-src',
                    'value': image.fullName
                }
            ],
        })
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Create images
    initiate(state);

    $('#imageModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var name = button.data('name')
        var created = button.data('created')
        var imageSource = button.data('src');
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        
        var modal = $(this)
        modal.find('.modal-title').text(name)
        modal.find('.modal-body #created').val(new Date(created).toISOString().split('.')[0])
        modal.find('.modal-body #imageInfocus')[0].setAttribute('src',imageSource);
      })
  });

  
