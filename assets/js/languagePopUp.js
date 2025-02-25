// ============================================================================
// HEADER: Initial Setup and DOM Event Listener
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const popup = document.getElementById('language-popup');
    const content = document.getElementById('content');
    // ========================================================================
    // HEADER: DOM Elements
    // ========================================================================
    const callUs = document.getElementById('call_us');
    const opening_hour = document.getElementById('opening_hour');
    const opening_hour_time = document.getElementById('opening_hour_time');
    const barber_kech = document.getElementById('barber_kech');
    const mobile_barber = document.getElementById('mobile_barber');
    const nav_home = document.getElementById('nav_home');
    const nav_services = document.getElementById('nav_services');
    const nav_pricing = document.getElementById('nav_pricing');
    const nav_gallery = document.getElementById('nav_gallery');
    const our_products = document.getElementById('our_products');
    const nav_testimonials = document.getElementById('nav_testimonials');
    const nav_appointment = document.getElementById('nav_appointment');
    // ========================================================================
    // SLIDER ELEMENTS
    // ========================================================================
    const slide_title1 = document.getElementById('slide_title1');
    const slide_text1 = document.getElementById('slide_text1');
    const slide_title2 = document.getElementById('slide_title2');
    const slide_text2 = document.getElementById('slide_text2');
    const slide_title3 = document.getElementById('slide_title3');
    const slide_text3 = document.getElementById('slide_text3');
    // ========================================================================
    // SERVICE ELEMENTS
    // ========================================================================
    const service_title = document.getElementById('service_title');
    const service_text = document.getElementById('service_text');
    const service_card_title1 = document.getElementById('service_card_title1');
    const service_card_text1 = document.getElementById('service_card_text1');
    const service_card_title2 = document.getElementById('service_card_title2');
    const service_card_text2 = document.getElementById('service_card_text2');
    const service_card_title3 = document.getElementById('service_card_title3');
    const service_card_text3 = document.getElementById('service_card_text3');
    const service_card_title4 = document.getElementById('service_card_title4');
    const service_card_text4 = document.getElementById('service_card_text4');
    const service_card_title5 = document.getElementById('service_card_title5');
    const service_card_text5 = document.getElementById('service_card_text5');
    const service_card_title6 = document.getElementById('service_card_title6');
    const service_card_text6 = document.getElementById('service_card_text6');
    // ========================================================================
    // PRICING ELEMENTS
    // ========================================================================
    const pricing_title = document.getElementById('pricing_title');
    const pricing_text = document.getElementById('pricing_text');
    const all_pricing = document.getElementById('all_pricing');
    const beauty_spa = document.getElementById('beauty_spa');
    const body_treatements = document.getElementById('body_treatements');
    const face_washing = document.getElementById('face_washing');
    const meditations = document.getElementById('meditations');
    const shaving = document.getElementById('shaving');
    // ========================================================================
    // GALLERY ELEMENTS
    // ========================================================================
    const gallery_title = document.getElementById('gallery_title');
    const gallery_text = document.getElementById('gallery_text');
    const gallery_explore = document.getElementById('gallery_explore');
    // ========================================================================
    // APPOINTMENT ELEMENTS
    // ========================================================================
    const appointment_title = document.getElementById('appointment_title');
    const appointment_text = document.getElementById('appointment_text');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const select_category = document.getElementById('select_category');
    const app_beauty_spa = document.getElementById('app_beauty_spa');
    const app_head_massage = document.getElementById('app_head_massage');
    const shaving_facial = document.getElementById('shaving_facial');
    const hair_color = document.getElementById('hair_color');
    const write_message = document.getElementById('write_message');
    const appointment_now = document.getElementById('appointment_now');
    // ========================================================================
    // APPOINTMENT ELEMENTS
    // ========================================================================
    const product_title = document.getElementById('product_title');
    const product_text = document.getElementById('product_text');
    const explore_products = document.getElementById('explore_products');
    // ========================================================================
    // SECTION: Translation Data
    // ========================================================================
    const translations = {
        en: {
            header: {
                call_us: 'Call Us :',
                opening_hour: 'Opening Hour :',
                opening_hour_time: 'Sunday - Friday, 08 am - 09 pm',
                barber_kech: 'Barber Kech',
                mobile_barber: 'Mobile Barber',
                nav_home: 'Home',
                nav_services: 'Services',
                nav_pricing: 'Pricing',
                nav_gallery: 'Gallery',
                our_products: 'Our Products',
                nav_testimonials: 'Testimonials',
                nav_appointment: 'Appointment',
            },
            slider: {
                slide_title1: 'Mobile Barber',
                slide_text1: 'Professional Haircuts Anytime, Anywhere',
                slide_title2: 'Premium Hair Care',
                slide_text2: 'Experience Luxury at Your Doorstep',
                slide_title3: 'Expert Stylists',
                slide_text3: 'Quality Service On Your Schedule',
            },
            service: {
                service_title: 'Service We Provide',
                service_text: 'Experience premium grooming wherever you are. Our mobile barbers bring top-notch cuts and styling right to your door.',
                service_card_title1 : 'Hair Cutting Style',
                service_card_text1 : 'Tailored haircuts to match your style, from classic to contemporary. Get the perfect cut without leaving your home.',
                service_card_title2 : 'Hair Treatment',
                service_card_text2 : 'Refreshing and revitalizing hair washes using top-quality products, all from the comfort of your home.',
                service_card_title3 : 'head Massage',
                service_card_text3 : 'Relax with our rejuvenating head massage, designed to relieve tension and improve circulation, all at your doorstep.',
                service_card_title4 : 'Skin Cleansing',
                service_card_text4 : 'Enjoy premium skin cleansing services, including facials and skincare, delivered right to your home.',
                service_card_title5 : 'Beard Shaping',
                service_card_text5 : 'Get professional beard shaping, trims, and straight razor shaves, wherever you are.',
                service_card_title6 : 'Multi Hair Colors',
                service_card_text6 : 'Vibrant and long-lasting hair colors, customized to your preferences, all without the need to leave your home.',
            },
            pricing : {
                pricing_title: 'Awesome Pricing Plan',
                pricing_text: 'Affordable and transparent pricing for premium grooming services, all at your doorstep. Choose the plan that suits your needs.',
                all_pricing: 'All Pricing',
                beauty_spa : 'Beauty & Spa',
                body_treatements : 'Body Treatements',
                face_washing : 'Face Washing',
                meditations : 'Meditations',
                shaving : 'Shaving',
            },
            gallery : {
                gallery_title : 'Latest Photo Gallery',
                gallery_text : 'Explore our latest work and see the precision and style we bring to every haircut, shave, and grooming session.',
                gallery_explore : 'Explore More Gallery',
            },
            appointement: {
                appointment_title: 'Make Appointment',
                appointment_text : 'Ready for a fresh look? Schedule your appointment now, and we’ll bring our expert barbering right to your door.',
                name : 'Your Full Name',
                email : 'Email Address',
                phone : 'Phone Number',
                select_category : 'Select category',
                app_beauty_spa : 'Beauty & spa',
                app_head_massage : 'Head massage',
                shaving_facial : 'Shaving & Facial',
                hair_color : 'Hair Color',
                write_message : 'Write Message',
                appointment_now : 'Appointment Now',
            },
            product: {
                product_title: 'Our products',
                product_text: 'Our top-quality grooming products ensure every haircut, shave, and treatment is a perfect experience. Explore our range of products.',
                explore_products: 'Explore More Products',
            },
            testimonials : {
                testimonials_title : 'What Our Clients Say',
            }
        },
        fr: {
            header: {
                call_us: 'Appelez-nous :',
                opening_hour: 'Heures d\'ouverture :',
                opening_hour_time: 'Dimanche - Vendredi, 08 h - 21 h',
                barber_kech: 'Barbier Kech',
                mobile_barber: 'Barbier mobile',
                nav_home: 'Accueil',
                nav_services: 'Services',
                nav_pricing: 'Tarifs',
                nav_gallery: 'Galerie',
                our_products: 'Nos Produits',
                nav_testimonials: 'Témoignages',
                nav_appointment: 'Rendez-vous',
            },
            slider: {
                slide_title1: 'Barbier Mobile',
                slide_text1: 'Coupe de cheveux professionnelle, à tout moment, n\'importe où',
                slide_title2: 'Soins capillaires premium',
                slide_text2: 'Vivez le luxe à votre porte',
                slide_title3: 'Styliste experts',
                slide_text3: 'Service de qualité selon votre emploi du temps',
            },
            service: {
                service_title: 'Service que nous fournissons',
                service_text: 'Découvrez des soins de coiffure premium où que vous soyez. Nos barbiers mobiles apportent des coupes et des coiffures de qualité directement à votre porte.',
                service_card_title1: 'Style de coupe de cheveux',
                service_card_text1: 'Des coupes de cheveux sur mesure pour correspondre à votre style, du classique au moderne. Obtenez la coupe parfaite sans quitter votre domicile.',
                service_card_title2: 'Soins capillaires',
                service_card_text2: 'Lavage de cheveux rafraîchissant et revitalisant avec des produits de haute qualité, tout cela depuis le confort de votre domicile.',
                service_card_title3: 'Massage du cuir chevelu',
                service_card_text3: 'Détendez-vous avec notre massage du cuir chevelu revigorant, conçu pour soulager les tensions et améliorer la circulation, directement chez vous.',
                service_card_title4: 'Nettoyage de la peau',
                service_card_text4: 'Profitez de services premium de nettoyage de la peau, incluant des soins du visage et des soins de la peau, livrés directement chez vous.',
                service_card_title5: 'Taille de barbe',
                service_card_text5: 'Obtenez une taille de barbe professionnelle, des taillages, et des rasages au rasoir droit, où que vous soyez.',
                service_card_title6: 'Couleurs de cheveux multi',
                service_card_text6: 'Des couleurs de cheveux vibrantes et durables, personnalisées selon vos préférences, sans avoir à quitter votre domicile.',
            },
            pricing: {
                pricing_title: 'Plan tarifaire génial',
                pricing_text: 'Des tarifs abordables et transparents pour des services de coiffure premium, directement à votre porte. Choisissez le plan qui correspond à vos besoins.',
                all_pricing: 'Tous les tarifs',
                beauty_spa: 'Beauté & Spa',
                body_treatements: 'Soins du corps',
                face_washing: 'Lavage du visage',
                meditations: 'Méditations',
                shaving: 'Rasage',
            },
            gallery: {
                gallery_title: 'Dernière galerie de photos',
                gallery_text: 'Découvrez nos derniers travaux et voyez la précision et le style que nous apportons à chaque coupe de cheveux, rasage et séance de toilettage.',
                gallery_explore: 'Explorer plus de galeries',
            },
            appointment: {
                appointment_title: 'Prendre un rendez-vous',
                appointment_text: 'Prêt pour un nouveau look ? Planifiez votre rendez-vous dès maintenant, et nous apporterons notre expertise de barbier directement à votre porte.',
                name: 'Votre nom complet',
                email: 'Adresse e-mail',
                phone: 'Numéro de téléphone',
                select_category: 'Sélectionner une catégorie',
                app_beauty_spa: 'Beauté & spa',
                app_head_massage: 'Massage de la tête',
                shaving_facial: 'Rasage & soins du visage',
                hair_color: 'Coloration des cheveux',
                write_message: 'Écrire un message',
                appointment_now: 'Prendre rendez-vous',
            },
            product: {
                product_title: 'Nos produits',
                product_text: 'Nos produits de soins de haute qualité garantissent que chaque coupe de cheveux, rasage et traitement est une expérience parfaite. Découvrez notre gamme de produits.',
                explore_products: 'Explorer plus de produits',
            },
            testimonials: {
                testimonials_title: 'Ce que disent nos clients',
            }
            
            
            
            
            
            
            
            
            
        },
        ar: {
            header: {
                call_us: 'اتصل بنا :',
                opening_hour: 'ساعات العمل :',
                opening_hour_time: 'من الأحد إلى الجمعة، من 08 صباحًا إلى 09 مساءً',
                barber_kech: 'حلاق كيش',
                mobile_barber: 'حلاق متنقل',
                nav_home: 'الصفحة الرئيسية',
                nav_services: 'الخدمات',
                nav_pricing: 'التسعير',
                nav_gallery: 'المعرض',
                our_products: 'منتجاتنا',
                nav_testimonials: 'الشهادات',
                nav_appointment: 'موعد',
            },
            slider: {
                slide_title1: 'حلاق متنقل',
                slide_text1: 'قصات شعر احترافية في أي وقت وأي مكان',
                slide_title2: 'عناية بالشعر فاخرة',
                slide_text2: 'اختبر الفخامة عند باب منزلك',
                slide_title3: 'مصممون خبراء',
                slide_text3: 'خدمة عالية الجودة في وقتك المحدد',
            },
            service: {
                service_title: 'الخدمة التي نقدمها',
                service_text: 'اختبر العناية بالشعر الفاخرة أينما كنت. يقدم حلاقونا المتنقلون قصات وتصفيفات عالية الجودة مباشرة إلى باب منزلك.',
                service_card_title1: 'أسلوب قص الشعر',
                service_card_text1: 'قصات شعر مخصصة تناسب أسلوبك، من الكلاسيكية إلى المعاصرة. احصل على القصة المثالية دون مغادرة منزلك.',
                service_card_title2: 'علاج الشعر',
                service_card_text2: 'غسولات شعر منعشة ومجددة باستخدام منتجات عالية الجودة، كل ذلك من راحة منزلك.',
                service_card_title3: 'تدليك الرأس',
                service_card_text3: 'استرخِ مع تدليك الرأس المجدد للطاقة، المصمم لتخفيف التوتر وتحسين الدورة الدموية، كل ذلك عند باب منزلك.',
                service_card_title4: 'تنظيف البشرة',
                service_card_text4: 'استمتع بخدمات تنظيف البشرة الفاخرة، بما في ذلك العلاجات الوجه والعناية بالبشرة، يتم تقديمها مباشرة إلى منزلك.',
                service_card_title5: 'تشذيب اللحية',
                service_card_text5: 'احصل على تشذيب لحية احترافي، وتهذيب، وحلاقة بالشفرة المستقيمة، أينما كنت.',
                service_card_title6: 'ألوان شعر متعددة',
                service_card_text6: 'ألوان شعر زاهية وطويلة الأمد، مصممة حسب تفضيلاتك، دون الحاجة لمغادرة منزلك.',
            },
            pricing: {
                pricing_title: 'خطة تسعير رائعة',
                pricing_text: 'أسعار معقولة وشفافة لخدمات التجميل الفاخرة، كل ذلك عند باب منزلك. اختر الخطة التي تناسب احتياجاتك.',
                all_pricing: 'جميع الأسعار',
                beauty_spa: 'الجمال وسبا',
                body_treatements: 'علاجات الجسم',
                face_washing: 'غسل الوجه',
                meditations: 'تأملات',
                shaving: 'حلاقة',
                // i'll complet that later 👍🏻
            },
            gallery: {
                gallery_title: 'أحدث معرض صور',
                gallery_text: 'استكشف أعمالنا الأخيرة واطلع على الدقة والأسلوب الذي نقدمه في كل قصة شعر، حلاقة، وجلسة عناية.',
                gallery_explore: 'استكشاف المزيد من المعرض',
            },
            appointment: {
                appointment_title: 'حجز موعد',
                appointment_text: 'جاهز لمظهر جديد؟ حدد موعدك الآن، وسنأتي إليك بخدمات الحلاقة الاحترافية مباشرة إلى باب منزلك.',
                name: 'الاسم الكامل',
                email: 'عنوان البريد الإلكتروني',
                phone: 'رقم الهاتف',
                select_category: 'اختر الفئة',
                app_beauty_spa: 'الجمال والمنتجع الصحي',
                app_head_massage: 'تدليك الرأس',
                shaving_facial: 'الحلاقة والعناية بالوجه',
                hair_color: 'صبغة الشعر',
                write_message: 'اكتب رسالة',
                appointment_now: 'احجز الآن',
            },
            product: {
                product_title: 'منتجاتنا',
                product_text: 'منتجات العناية عالية الجودة لدينا تضمن أن تكون كل قصة شعر، حلاقة، وعلاج تجربة مثالية. استكشف مجموعتنا من المنتجات.',
                explore_products: 'استكشاف المزيد من المنتجات',

            },
            testimonials: {
                testimonials_title: 'ماذا يقول عملاؤنا',
            }
            

        }
    };

    // ========================================================================
    // SECTION: Language Initialization
    // ========================================================================
    const savedLang = localStorage.getItem('selectedLanguage');

    // Check if a language is saved, otherwise show the popup
    if (!savedLang) {
        popup.style.display = 'flex';
    } else {
        updateContent(savedLang);
    }

    // ========================================================================
    // SECTION: Event Listeners for Language Selection
    // ========================================================================
    document.querySelectorAll('.flag').forEach(flag => {
        flag.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            localStorage.setItem('selectedLanguage', selectedLang);
            popup.style.display = 'none';
            updateContent(selectedLang);
        });
    });

    // ========================================================================
    // SECTION: Content Update Function
    // ========================================================================
    function updateContent(lang) {
        
        // HEADER ELEMENTS
        callUs.textContent = translations[lang].header.call_us;
        opening_hour.textContent = translations[lang].header.opening_hour;
        opening_hour_time.textContent = translations[lang].header.opening_hour_time;
        barber_kech.textContent = translations[lang].header.barber_kech;
        mobile_barber.textContent = translations[lang].header.mobile_barber;
        nav_home.textContent = translations[lang].header.nav_home;
        nav_services.textContent = translations[lang].header.nav_services;
        nav_pricing.textContent = translations[lang].header.nav_pricing;
        nav_gallery.textContent = translations[lang].header.nav_gallery;
        our_products.textContent = translations[lang].header.our_products;
        nav_testimonials.textContent = translations[lang].header.nav_testimonials;
        nav_appointment.textContent = translations[lang].header.nav_appointment;
    
        // SLIDER ELEMENTS
        slide_title1.textContent = translations[lang].slider.slide_title1;
        slide_text1.textContent = translations[lang].slider.slide_text1;
        slide_title2.textContent = translations[lang].slider.slide_title2;
        slide_text2.textContent = translations[lang].slider.slide_text2;
        slide_title3.textContent = translations[lang].slider.slide_title3;
        slide_text3.textContent = translations[lang].slider.slide_text3;
    
        // SERVICE ELEMENTS
        service_title.textContent = translations[lang].service.service_title;
        service_text.textContent = translations[lang].service.service_text;
        service_card_title1.textContent = translations[lang].service.service_card_title1;
        service_card_text1.textContent = translations[lang].service.service_card_text1;
        service_card_title2.textContent = translations[lang].service.service_card_title2;
        service_card_text2.textContent = translations[lang].service.service_card_text2;
        service_card_title3.textContent = translations[lang].service.service_card_title3;
        service_card_text3.textContent = translations[lang].service.service_card_text3;
        service_card_title4.textContent = translations[lang].service.service_card_title4;
        service_card_text4.textContent = translations[lang].service.service_card_text4;
        service_card_title5.textContent = translations[lang].service.service_card_title5;
        service_card_text5.textContent = translations[lang].service.service_card_text5;
        service_card_title6.textContent = translations[lang].service.service_card_title6;
        service_card_text6.textContent = translations[lang].service.service_card_text6;
        // PRICING ELEMENTS
        pricing_title.textContent = translations[lang].pricing.pricing_title;
        pricing_text.textContent = translations[lang].pricing.pricing_text;
        all_pricing.textContent = translations[lang].pricing.all_pricing;
        beauty_spa.textContent = translations[lang].pricing.beauty_spa;
        body_treatements.textContent = translations[lang].pricing.body_treatements;
        face_washing.textContent = translations[lang].pricing.face_washing;
        meditations.textContent = translations[lang].pricing.meditations;
        shaving.textContent = translations[lang].pricing.shaving

        // GALLERY ELEMENTS
        gallery_title.textContent = translations[lang].gallery.gallery_title;
        gallery_text.textContent = translations[lang].gallery.gallery_text;
        gallery_explore.textContent = translations[lang].gallery.gallery_explore;

        // APPOINTMENT ELEMENTS
        appointment_title.textContent = translations[lang].appointment.appointment_title;
        appointment_text.textContent = translations[lang].appointment.appointment_text;
        name.placeholder = translations[lang].appointment.name;
        email.placeholder = translations[lang].appointment.email;
        phone.placeholder = translations[lang].appointment.phone;
        select_category.textContent = translations[lang].appointment.select_category;
        app_beauty_spa.textContent = translations[lang].appointment.app_beauty_spa;
        app_head_massage.textContent = translations[lang].appointment.app_head_massage;
        shaving_facial.textContent = translations[lang].appointment.shaving_facial;
        hair_color.textContent = translations[lang].appointment.hair_color;
        write_message.placeholder = translations[lang].appointment.write_message;
        appointment_now.textContent = translations[lang].appointment.appointment_now;

        // OUR PRODUCTS ELEMENTS
        product_title.textContent = translations[lang].product.product_title;
        product_text.textContent = translations[lang].product.product_text;
        explore_products.textContent = translations[lang].product.explore_products;

        // TESTIMONIALS ELEMENTS
        testimonials_title.textContent = translations[lang].testimonials.testimonials_title;

    }

});
