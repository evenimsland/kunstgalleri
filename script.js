let state = {
    "images": [
        {
            "id": "1",
            "name": "file name",
            "fullName": "images/1.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "2",
            "name": "file name",
            "fullName": "images/2.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "3",
            "name": "file name",
            "fullName": "images/3.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "4",
            "name": "file name",
            "fullName": "images/4.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "5",
            "name": "file name",
            "fullName": "images/5.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "6",
            "name": "file name",
            "fullName": "images/6.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "7",
            "name": "file name",
            "fullName": "images/7.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "8",
            "name": "file name",
            "fullName": "images/8.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "9",
            "name": "file name",
            "fullName": "images/9.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "10",
            "name": "file name",
            "fullName": "images/10.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "11",
            "name": "file name",
            "fullName": "images/11.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "12",
            "name": "file name",
            "fullName": "images/12.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "13",
            "name": "file name",
            "fullName": "images/13.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "14",
            "name": "file name",
            "fullName": "images/14.jpg",
            "created": 1685135705184,
            "comments": []
        },
        {
            "id": "15",
            "name": "file name",
            "fullName": "images/15.jpg",
            "created": 1685135705184,
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

  
