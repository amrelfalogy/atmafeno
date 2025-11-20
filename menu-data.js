const menuData = {
    categories: [
        {
            id: 'كبدة-وسجق',
            name: 'كبدة وسجق',
            icon: 'fas fa-drumstick-bite',
            items: [
                {
                    name: 'كبدة إسكندراني',
                    description: 'كبدة طازجة متبلة بالبهارات الإسكندرانية الأصيلة',
                    price: 25,
                    image: 'assets/imgs/1.jpg',
                    badge: { text: 'أكثر مبيعاً', type: 'bestseller' }
                },
                {
                    name: 'كبدة فراخ',
                    description: 'كبدة فراخ طازجة بنكهة مميزة',
                    price: 25,
                    image: 'assets/imgs/cheken.jpg'
                },
                {
                    name: 'سجق اسكندراني مفروم اصلي',
                    description: 'سجق مفروم على الطريقة الإسكندرانية الأصيلة',
                    price: 25,
                    image: 'assets/imgs/2.jpg',
                    badge: { text: 'حار 🔥', type: 'hot' }
                },
                {
                    name: 'سجق اسكندراني مدخن اصلي',
                    description: 'سجق مدخن بنكهة فريدة ومميزة',
                    price: 25,
                    image: 'assets/imgs/3.jpg'
                },
                {
                    name: 'سجق شرقي مخصوص',
                    description: 'سجق بالتوابل الشرقية الخاصة',
                    price: 25,
                    image: 'assets/imgs/special.jpg'
                }
            ]
        },
        {
            id: 'سندوتشات-لحوم',
            name: 'سندوتشات لحوم',
            icon: 'fas fa-hamburger',
            items: [
                {
                    name: 'كفتة داوود باشا',
                    description: 'كفتة لحم بصوص الطماطم الشهي',
                    price: 25,
                    image: 'assets/imgs/dawood.jpg',
                    badge: { text: 'مميز', type: 'featured' }
                },
                {
                    name: 'حواوشي مخصوص',
                    description: 'حواوشي باللحم المفروم والبهارات الخاصة',
                    price: 45,
                    image: 'assets/imgs/hwawshi.jpg'
                },
                {
                    name: 'هامبورجر بيج تيستي',
                    description: 'برجر ضخم بلحم بقري فاخر مع جبنة وخضار',
                    price: 65,
                    image: 'assets/imgs/burger.jpg',
                    badge: { text: 'بريميوم', type: 'premium' }
                }
            ]
        },
        {
            id: 'سندوتشات-حلو',
            name: 'سندوتشات حلو',
            icon: 'fas fa-stroopwafel',
            items: [
                {
                    name: 'قشطة بلدي بالعسل',
                    description: 'قشطة بلدي طازجة مع عسل نحل طبيعي',
                    price: 25,
                    image: 'assets/imgs/honey.jpg',
                    badge: { text: 'حلو 🍯', type: 'sweet' }
                },
                {
                    name: 'قشطة بلدي بالمربي',
                    description: 'قشطة بلدي مع مربى الفراولة اللذيذة',
                    price: 25,
                    image: 'assets/imgs/sweet1.jpg'
                },
                {
                    name: 'قشطة بلدي',
                    description: 'قشطة بلدي طازجة سادة',
                    price: 25,
                    image: 'assets/imgs/butter.jpg'
                }
            ]
        },
        {
            id: 'حاجه-ساقعه',
            name: 'حاجه ساقعه',
            icon: 'fas fa-glass-water',
            items: [
                {
                    name: 'ليمون نعناع',
                    description: 'مشروب ليمون طازج بالنعناع المنعش',
                    price: 25,
                    image: 'assets/imgs/mojito.jpg',
                    badge: { text: 'منعش 🍋', type: 'fresh' }
                },
                {
                    name: 'حاجه ساقعة',
                    description: 'مشروبات باردة متنوعة',
                    price: 20,
                    image: 'assets/imgs/drinks.jpg'
                },
                {
                    name: 'مياة معدنية',
                    description: 'مياة معدنية طبيعية',
                    price: 10,
                    image: 'assets/imgs/water.jpg'
                }
            ]
        },
        {
            id: 'إضافات',
            name: 'إضافات',
            icon: 'fas fa-plus-circle',
            items: [
                {
                    name: 'بطاطس',
                    description: 'بطاطس مقلية مقرمشة ولذيذة',
                    price: 30,
                    image: 'assets/imgs/fries.jpg',
                    badge: { text: 'إضافي', type: 'extra' }
                }
            ]
        }
    ]
};


const badgeStyles = {
    'bestseller': 'أكثر مبيعاً',
    'hot': 'hot',
    'premium': 'premium',
    'sweet': 'sweet',
    'fresh': 'fresh',
    'extra': 'extra',
    'featured': ''
};