
const signsData = [
    {
        "category": "danger",
        "name": "منعرج خطير على اليمين",
        "description": "يجب التخفيض من السرعة.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-arrow-turn-up\" style=\"font-size: 2.5rem; color: #0f172a; transform: scaleX(1) rotate(90deg);\"></i>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "منعرج خطير على اليسار",
        "description": "يجب التخفيض من السرعة وتوخي الحذر.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-arrow-turn-up\" style=\"font-size: 2.5rem; color: #0f172a; transform: scaleX(-1) rotate(90deg);\"></i>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "خطر غير معين",
        "description": "خطر عام يرجى الانتباه.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: center; justify-content: center; padding-top: 20px;\">\n        <span style=\"font-size: 3rem; color: #0f172a; font-weight: bold; margin-bottom: 5px;\">!</span>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "تقاطع طريق مع سكة حديدية",
        "description": "سكة بدون حواجز.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-train\" style=\"font-size: 2rem; color: #0f172a;\"></i>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "طريق زلقة",
        "description": "يجب خفض السرعة بسبب احتمال انزلاق العربة.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-car-burst\" style=\"font-size: 2rem; color: #0f172a;\"></i>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "ممر للمترجلين",
        "description": "خطر عبور المترجلين للطريق.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-person-walking\" style=\"font-size: 2rem; color: #0f172a;\"></i>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "أطفال مدارس",
        "description": "يجب الانتباه لوجود أطفال ومدرسة قريبة.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-children\" style=\"font-size: 1.5rem; color: #0f172a;\"></i>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "مرور الرعاة / حيوانات",
        "description": "خطر عبور الحيوانات.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-cow\" style=\"font-size: 1.5rem; color: #0f172a;\"></i>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "أشغال",
        "description": "وجود أشغال مبينة على الطريق.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-person-digging\" style=\"font-size: 2rem; color: #0f172a;\"></i>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "طريق ضيقة",
        "description": "تضيق الطريق من الجانبين.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <svg width=\"40\" height=\"50\" viewBox=\"0 0 40 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5 50 C5 30 15 20 15 0 L19 0 C19 20 9 30 9 50 Z\" fill=\"#0f172a\"/>\n<path d=\"M35 50 C35 30 25 20 25 0 L21 0 C21 20 31 30 31 50 Z\" fill=\"#0f172a\"/>\n<rect x=\"19\" y=\"15\" width=\"2\" height=\"8\" rx=\"1\" fill=\"#0f172a\"/>\n<rect x=\"19\" y=\"30\" width=\"2\" height=\"8\" rx=\"1\" fill=\"#0f172a\"/>\n</svg>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "مخفظ سرعة",
        "description": "مخفظ سرعة (Dos d'âne).",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-mound\" style=\"font-size: 2rem; color: #0f172a;\"></i>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "تقاطع طريقين",
        "description": "تقاطع طريقين، الأولوية لليمين.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-xmark\" style=\"font-size: 2.5rem; color: #0f172a;\"></i>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "إشارات ضوئية",
        "description": "اقتراب من إشارات مرور ضوئية.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-traffic-light\" style=\"font-size: 2rem; color: #0f172a;\"></i>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "جولان في الاتجاهين",
        "description": "طريق ذو اتجاهين.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-right-left\" style=\"font-size: 2.5rem; color: #0f172a; transform: rotate(90deg);\"></i>\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "مفترق دوراني",
        "description": "اقتراب من مفترق دوراني.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:11px; bottom:8px; left:11px; right:11px; background: white; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n        <i class=\"fa-solid fa-arrows-spin\" style=\"font-size: 2.5rem; color: #0f172a;\"></i>\n    </div>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع المرور",
        "description": "يمنع المرور في كلا الاتجاهين.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #ef4444; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\"><div style=\"width: 66px; height: 66px; border-radius: 50%; background: white;\"></div></div>"
    },
    {
        "category": "prohibition",
        "name": "اتجاه محجر",
        "description": "يمنع الدخول في هذا الاتجاه.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #ef4444; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <div style=\"width: 60%; height: 20px; background: white;\"></div>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "تحديد السرعة 50",
        "description": "يمنع تجاوز 50 كم/س.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 12px solid #ef4444; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <span style=\"font-size: 2.5rem; font-weight: 800; color: #0f172a;\">50</span>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "تحديد السرعة 90",
        "description": "يمنع تجاوز 90 كم/س.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 12px solid #ef4444; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <span style=\"font-size: 2.5rem; font-weight: 800; color: #0f172a;\">90</span>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع تجاوز السيارات",
        "description": "يمنع التجاوز لكل العربات.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 12px solid #ef4444; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <div style=\"display:flex; gap: 4px; opacity: 0.1;\"><i class=\"fa-solid fa-car-side\" style=\"color: #ef4444; font-size: 1.5rem;\"></i><i class=\"fa-solid fa-car-side\" style=\"color: #0f172a; font-size: 1.5rem;\"></i></div>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع مرور الشاحنات",
        "description": "يمنع دخول العربات الناقلة للبضائع.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 12px solid #ef4444; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <i class=\"fa-solid fa-truck\" style=\"font-size: 2rem; color: #0f172a;\"></i>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع الوقوف",
        "description": "يمنع ركن السيارة في هذا الجانب.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 10px solid #ef4444; margin: 0 auto; position: relative; box-shadow: 0 4px 6px rgba(0,0,0,0.3); display: flex; justify-content: center; align-items: center; overflow: hidden;\">\n    <div style=\"position: absolute; width: 120%; height: 10px; background: #ef4444; transform: rotate(45deg);\"></div>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع الوقوف والتوقف",
        "description": "يمنع الوقوف والتوقف تماما.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 10px solid #ef4444; margin: 0 auto; position: relative; box-shadow: 0 4px 6px rgba(0,0,0,0.3); display: flex; justify-content: center; align-items: center; overflow: hidden;\">\n    <div style=\"position: absolute; width: 120%; height: 10px; background: #ef4444; transform: rotate(45deg);\"></div>\n    <div style=\"position: absolute; width: 120%; height: 10px; background: #ef4444; transform: rotate(-45deg);\"></div>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع الدوران لليسار",
        "description": "يمنع الانعطاف يسارا.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: white; border: 10px solid #ef4444; margin: 0 auto; position: relative; box-shadow: 0 4px 6px rgba(0,0,0,0.3); display: flex; justify-content: center; align-items: center; overflow: hidden;\">\n    <i class=\"fa-solid fa-arrow-turn-down\" style=\"font-size: 2.5rem; color: #0f172a; transform: rotate(90deg);\"></i>\n    <div style=\"position: absolute; width: 120%; height: 10px; background: #ef4444; transform: rotate(45deg);\"></div>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع الدوران للخلف",
        "description": "يمنع القيام بنصف دورة (Demi-tour).",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 12px solid #ef4444; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <i class=\"fa-solid fa-arrow-rotate-left\" style=\"font-size: 2.5rem; color: #0f172a;\"></i><div style=\"position: absolute; width: 120%; height: 10px; background: #ef4444; transform: rotate(45deg);\"></div>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع مرور المترجلين",
        "description": "يمنع دخول المترجلين.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 12px solid #ef4444; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <i class=\"fa-solid fa-person-walking\" style=\"font-size: 2.5rem; color: #0f172a;\"></i><div style=\"position: absolute; width: 120%; height: 10px; background: #ef4444; transform: rotate(45deg);\"></div>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع مرور الدراجات",
        "description": "يمنع دخول الدراجات العادية.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 12px solid #ef4444; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <i class=\"fa-solid fa-bicycle\" style=\"font-size: 2rem; color: #0f172a;\"></i>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "نهاية تحديد السرعة 60",
        "description": "انتهاء منع تجاوز 60 كم/س.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 4px solid #94a3b8; background: #e2e8f0; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\"><span style=\"font-size: 3rem; font-weight: 800; color: #94a3b8;\">60</span><div style=\"position: absolute; width: 100%; height: 4px; background: #0f172a; transform: rotate(45deg);\"></div></div>"
    },
    {
        "category": "prohibition",
        "name": "نهاية كل الممنوعات",
        "description": "نهاية جميع الممنوعات السابقة.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 4px solid #94a3b8; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <div style=\"position: absolute; width: 100%; height: 6px; background: #0f172a; transform: rotate(45deg);\"></div>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "اتجاه إجباري لليمين",
        "description": "يجب الانعطاف لليمين.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-arrow-turn-up text-light\" style=\"font-size: 2.5rem; transform: rotate(90deg);\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "اتجاه إجباري لليسار",
        "description": "يجب الانعطاف لليسار.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-arrow-turn-up text-light\" style=\"font-size: 2.5rem; transform: scaleX(-1) rotate(90deg);\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "مفترق دوراني إجباري",
        "description": "يجب التزام الدوران.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-arrows-spin text-light\" style=\"font-size: 3rem;\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "سرعة دنيا إجبارية 30",
        "description": "يجب ألا تقل السرعة عن 30 كم/س.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <span style=\"color: white; font-size: 2.5rem; font-weight: 800;\">30</span>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "ممر إجباري للمترجلين",
        "description": "خاص بالمترجلين وفقط.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-person-walking text-light\" style=\"font-size: 3rem;\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "مسلك إجباري للدراجات",
        "description": "مسلك مخصص للدراجات الهوائية.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-bicycle text-light\" style=\"font-size: 2.5rem;\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "اتجاه إجباري للأمام",
        "description": "يجب مواصلة السير للأمام.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-arrow-up text-light\" style=\"font-size: 3.5rem;\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "نهاية السرعة الدنيا الإجبارية 30",
        "description": "انتهاء إلزامية سرعة 30 كم/س.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 4px solid white; background: #3b82f6; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\"><span style=\"font-size: 3rem; font-weight: 800; color: white;\">30</span><div style=\"position: absolute; width: 140%; height: 4px; background: #ef4444; transform: rotate(45deg);\"></div></div>"
    },
    {
        "category": "info",
        "name": "مأوى وقوف",
        "description": "موقف للسيارات.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 12px; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <span style=\"color: white; font-size: 3.5rem; font-weight: bold;\">P</span>\n</div>"
    },
    {
        "category": "info",
        "name": "محطة وقود",
        "description": "محطة بنزين قريبة.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 12px; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <div style=\"background: white; padding: 5px 8px; border-radius: 5px;\"><i class=\"fa-solid fa-gas-pump\" style=\"color: black; font-size: 2.5rem;\"></i></div>\n</div>"
    },
    {
        "category": "info",
        "name": "مستشفى",
        "description": "تجنب إحداث ضجيج.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 12px; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <div style=\"width: 60px; height: 60px; background: white; border-radius: 4px; display: flex; justify-content: center; align-items: center;\"><i class=\"fa-solid fa-plus\" style=\"color: #ef4444; font-size: 2.5rem;\"></i></div>\n</div>"
    },
    {
        "category": "info",
        "name": "طريق ذو اتجاه واحد",
        "description": "الجولان في اتجاه واحد.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 12px; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-arrow-up text-light\" style=\"font-size: 3.5rem;\"></i>\n</div>"
    },
    {
        "category": "info",
        "name": "نهاية طريق ذو اتجاه واحد",
        "description": "الطريق يصبح ذو اتجاهين.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 12px; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-arrow-up text-light\" style=\"font-size: 3.5rem;\"></i><div style=\"position: absolute; width: 140%; height: 4px; background: #ef4444; transform: rotate(45deg);\"></div>\n</div>"
    },
    {
        "category": "info",
        "name": "قفص النجدة",
        "description": "هاتف نجدة SOS.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 12px; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-phone text-light\" style=\"font-size: 3rem;\"></i>\n</div>"
    },
    {
        "category": "info",
        "name": "مكان تخييم",
        "description": "موقع مخصص للتخييم.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 12px; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-campground text-light\" style=\"font-size: 2.5rem;\"></i>\n</div>"
    },
    {
        "category": "info",
        "name": "محطة حافلات",
        "description": "موقف مخصص للحافلات.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 12px; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-bus text-light\" style=\"font-size: 3rem;\"></i>\n</div>"
    },
    {
        "category": "info",
        "name": "طريق مسدود",
        "description": "طريق بدون مخرج.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 12px; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <div style=\"width:15px; height:35px; background:white; position:relative; margin-top:20px;\"><div style=\"position:absolute; top:-15px; left:-12px; width:40px; height:15px; background:#ef4444;\"></div></div>\n</div>"
    },
    {
        "category": "danger",
        "name": "ترك الأولوية",
        "description": "يجب ترك الأولوية للمفترق القادم.",
        "iconHtml": "<div style=\"width:100px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto;\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: #ef4444; clip-path: polygon(0% 0%, 100% 0%, 50% 100%); z-index: 1;\"></div>\n    <div style=\"position: absolute; top:8px; bottom:11px; left:11px; right:11px; background: white; clip-path: polygon(0% 0%, 100% 0%, 50% 100%); z-index: 2; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px;\">\n    </div>\n</div>"
    },
    {
        "category": "danger",
        "name": "قف",
        "description": "وقوف إجباري وتام.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; background: #ef4444; clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%); margin: 0 auto; display: flex; justify-content: center; align-items: center; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative;\">\n    <div style=\"width: 86px; height: 86px; background: #ef4444; clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%); border: 2px solid white; display: flex; justify-content: center; align-items: center;\">\n        <span style=\"color: white; font-weight: bold; font-size: 2rem; font-family: 'Tajawal', sans-serif;\">قف</span>\n    </div>\n</div>"
    },
    {
        "category": "info",
        "name": "طريق ذات أولوية",
        "description": "أنت في طريق له الأولوية في المفترقات القادمة.",
        "iconHtml": "<div style=\"width:90px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto; transform: rotate(45deg);\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: white; z-index: 1; border: 3px solid #0f172a;\"></div>\n    <div style=\"position: absolute; top:12px; bottom:12px; left:12px; right:12px; background: #fbbf24; z-index: 2;\"></div>\n</div>"
    },
    {
        "category": "info",
        "name": "نهاية طريق ذات أولوية",
        "description": "نهاية الأولوية في الطريق.",
        "iconHtml": "<div style=\"width:90px; height:90px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); position: relative; margin: 0 auto; transform: rotate(45deg);\">\n    <div style=\"position: absolute; top:0; bottom:0; left:0; right:0; background: white; z-index: 1; border: 3px solid #0f172a;\"></div>\n    <div style=\"position: absolute; top:12px; bottom:12px; left:12px; right:12px; background: #fbbf24; z-index: 2;\"></div>\n    <div style=\"position: absolute; top:0; left:40px; width:10px; height:100px; background: black; z-index: 3;\"></div>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "إجباري: ارتداء خوذة",
        "description": "يجب ارتداء الخوذة الواقية.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-hard-hat text-light\" style=\"font-size: 2.5rem;\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "إجباري: ارتداء نظارات",
        "description": "يجب ارتداء نظارات واقية.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-glasses text-light\" style=\"font-size: 3rem;\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "إجباري: حماية السمع",
        "description": "يجب وضع واقيات الأذنين.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-ear-listen text-light\" style=\"font-size: 2.5rem;\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "إجباري: حذاء أمان",
        "description": "يجب ارتداء حذاء العمل الواقي.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-shoe-prints text-light\" style=\"font-size: 2.5rem; transform: rotate(-90deg);\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "إجباري: قفازات",
        "description": "يجب ارتداء قفازات العمل.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-mitten text-light\" style=\"font-size: 2.5rem;\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "إجباري: كمامة واقية",
        "description": "يجب ارتداء قناع أو كمامة.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-mask-face text-light\" style=\"font-size: 2.5rem;\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "إجباري: غسل اليدين",
        "description": "يجب غسل اليدين جيدا.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-hands-bubbles text-light\" style=\"font-size: 2.5rem;\"></i>\n</div>"
    },
    {
        "category": "mandatory",
        "name": "إجباري: سترة عاكسة",
        "description": "يجب ارتداء سترة السلامة.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; background: #3b82f6; border: 3px solid white; outline: 3px solid #3b82f6; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-vest text-light\" style=\"font-size: 2.5rem;\"></i>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع التدخين",
        "description": "يمنع التدخين في هذه المنطقة.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 12px solid #ef4444; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <i class=\"fa-solid fa-smoking\" style=\"font-size: 2.5rem; color: #0f172a;\"></i><div style=\"position: absolute; width: 120%; height: 10px; background: #ef4444; transform: rotate(45deg);\"></div>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع إشعال نار",
        "description": "يمنع استعمال لهب مكشوف.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 12px solid #ef4444; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <i class=\"fa-solid fa-fire text-secondary\" style=\"font-size: 2.5rem; opacity: 0.1;\"></i><div style=\"position: absolute; width: 120%; height: 10px; background: #ef4444; transform: rotate(45deg);\"></div>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع استعمال الهاتف",
        "description": "يمنع تشغيل الهواتف المحمولة.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 12px solid #ef4444; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <i class=\"fa-solid fa-mobile-screen\" style=\"font-size: 2.5rem; color: #0f172a;\"></i><div style=\"position: absolute; width: 120%; height: 10px; background: #ef4444; transform: rotate(45deg);\"></div>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع التصوير",
        "description": "يمنع التصوير في هذا المكان.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 12px solid #ef4444; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <i class=\"fa-solid fa-camera\" style=\"font-size: 2.5rem; color: #0f172a;\"></i><div style=\"position: absolute; width: 120%; height: 10px; background: #ef4444; transform: rotate(45deg);\"></div>\n</div>"
    },
    {
        "category": "prohibition",
        "name": "ممنوع اللمس",
        "description": "يمنع لمس المعدات.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 50%; border: 12px solid #ef4444; background: white; margin: 0 auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative;\">\n    <i class=\"fa-solid fa-hand\" style=\"font-size: 2.5rem; color: #0f172a;\"></i><div style=\"position: absolute; width: 120%; height: 10px; background: #ef4444; transform: rotate(45deg);\"></div>\n</div>"
    },
    {
        "category": "info",
        "name": "إسعافات أولية",
        "description": "صندوق معدات الإسعاف.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 8px; background: #22c55e; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-briefcase-medical text-light\" style=\"font-size: 3.5rem;\"></i>\n</div>"
    },
    {
        "category": "info",
        "name": "مخرج طوارئ",
        "description": "اتجاه الخروج عند الخطر.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 8px; background: #22c55e; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-person-running text-light\" style=\"font-size: 3rem;\"></i>\n</div>"
    },
    {
        "category": "info",
        "name": "نقطة تجمع",
        "description": "التجمع هنا عند النجاة.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 8px; background: #22c55e; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <div style=\"display:flex; flex-direction:column; align-items:center;\"><i class=\"fa-solid fa-arrows-to-circle text-light\" style=\"font-size: 2rem;\"></i><i class=\"fa-solid fa-users text-light\" style=\"font-size:1.5rem;\"></i></div>\n</div>"
    },
    {
        "category": "info",
        "name": "مطفأة حريق",
        "description": "مكان وجود مطفأة الحريق.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 8px; background: #ef4444; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-fire-extinguisher text-light\" style=\"font-size: 3rem;\"></i>\n</div>"
    },
    {
        "category": "info",
        "name": "جرس إنذار",
        "description": "زر النجدة أو إنذار الحريق.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 8px; background: #ef4444; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-bell text-light\" style=\"font-size: 3rem;\"></i>\n</div>"
    },
    {
        "category": "info",
        "name": "خرطوم حريق",
        "description": "مكان وجود خرطوم إطفاء الحريق.",
        "iconHtml": "<div style=\"width: 100px; height: 100px; border-radius: 8px; background: #ef4444; margin: 4px auto; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">\n    <i class=\"fa-solid fa-dharmachakra text-light\" style=\"font-size: 3rem;\"></i>\n</div>"
    }
];

const lessonsData = [
    {
        "id": "lesson1",
        "title": "أولوية المرور في المفترقات",
        "icon": "fa-right-left",
        "content": "<ul class=\"lesson-list\">\n            <li><strong>المفترقات بدون علامات:</strong> تطبق قاعدة الأولوية لليمين مطلقا.</li>\n            <li><strong>علامة \"قف\" (STOP):</strong> الوقوف إجباري والتام، مع إعطاء الأولوية للعربات القادمة من اليمين واليسار.</li>\n            <li><strong>علامة ترك الأولوية (مثلث مقلوب):</strong> التخفيض من السرعة وترك الأولوية لليمين واليسار دون إلزامية الوقوف التام إذا كان الطريق شاغرا.</li>\n            <li><strong>المفترقات الدورانية:</strong> الأولوية دائما للعربات المتواجدة داخل المفترق.</li>\n            <li><strong>عربات التدخل السريع:</strong> يُمنح حق الأولوية المطلقة لمركبات الشرطة، الحرس الوطني، الحماية المدنية، والإسعاف عند تشغيلهم للمنبهات الضوئية أو الصوتية. يجب فسح المجال وتسهيل مرورهم الفوري.</li>\n        </ul>"
    },
    {
        "id": "lesson2",
        "title": "السرعة ومسافات الأمان والتوقف",
        "icon": "fa-gauge-high",
        "content": "<ul class=\"lesson-list\">\n            <li><strong>المرور داخل مواطن العمران:</strong> 50 كم/س كحد أقصى للسيارات الخفيفة.</li>\n            <li><strong>خارج مواطن العمران (الطرقات العادية):</strong> 90 كم/س بصفة عامة. (70 كم/س أثناء تهاطل الأمطار).</li>\n            <li><strong>الطريق السيارة:</strong> أقصى سرعة مسموحة هي 110 كم/س (90 كم/س أثناء تهاطل الأمطار). أدنى سرعة إجبارية هي 60 كم/س.</li>\n            <li><strong>مسافة الأمان:</strong> هي المسافة الدنيا التي يجب تركها لتفادي الاصطدام. تُقدر برقم عشر السرعة × 3. (مثلا سرعة 90: نترك 9 × 3 = 27 مترا كحد أدنى، والأفضل × 6 = 54 مترا).</li>\n            <li><strong>مسافة التوقف:</strong> لحسابها، نضرب عشر السرعة في نفسه. (بسرعة 90 كم/س: 9 × 9 = 81 مترا).</li>\n            <li><strong>مسافة رد الفعل:</strong> تتعلق بالحالة البدنية والنفسية للسائق وتقدر بثانية واحدة تقريبا (تتضاعف بسبب التعب أو الكحول). لحسابها نضرب عشر السرعة × 3.</li>\n        </ul>"
    },
    {
        "id": "lesson3",
        "title": "المجاوزة والمقاطعة",
        "icon": "fa-car-side",
        "content": "<ul class=\"lesson-list\">\n            <li><strong>قاعدة المجاوزة:</strong> المجاوزة تتم دائما من <strong>اليسار</strong>.</li>\n            <li><strong>شروط المجاوزة:</strong> التأكد من عدم وجود منع (خط متصل أو علامة منع)، التأكد من خلو المسار المعاكس لمسافة كافية، التأكد من أن العربة التي بالخلف لا تهم بمجاوزتك، وتشغيل الغماز الأيسر.</li>\n            <li><strong>المجاوزة من اليمين:</strong> مسموح بها <strong>فقط</strong> إذا أعلنت العربة التي أمامك بواسطة غمازها الأيسر عن نيتها في الدوران نحو اليسار.</li>\n            <li><strong>المقاطعة الصعبة:</strong> في المنحدرات الجبلية القوية، إذا صعبت المقاطعة، يجب على العربة النازلة التوقف لتسهيل مرور العربة الصاعدة (لأن انطلاق العربة الصاعدة أصعب). وإذا لزم الرجوع للخلف، فالسيارة الخفيفة ترجع للخلف أمام الشاحنة أو الحافلة.</li>\n        </ul>"
    },
    {
        "id": "lesson4",
        "title": "الوقوف والتوقف",
        "icon": "fa-square-parking",
        "content": "<ul class=\"lesson-list\">\n            <li><strong>الفرق بينهما:</strong> الوقوف هو ركن العربة ومغادرتها، التوقف هو البقاء لفترة قصيرة لإنزال راكب أو بضاعة مع بقاء السائق على المقود.</li>\n            <li><strong>ممنوعات باتة:</strong> يمنع الوقوف والتوقف فوق ممرات المترجلين، المدارج، سكك الحديد، داخل الأنفاق، وعلى شريط الوقوف الاضطراري بالطريق السيارة (إلا في حالة العطب).</li>\n            <li><strong>حجب الرؤية:</strong> يمنع الوقوف أو التوقف بالقرب من المفترقات والمنعرجات وقمم المرتفعات وأمام العلامات المرورية إذا كان الركن يحجبها أو يعيق المرور.</li>\n            <li><strong>الوقوف الليلي:</strong> عند التوقف ليلا على قارعة طريق غير مضاء، يجب ترك أضواء الوضعية (Feux de position) مشتعلة للتنبيه.</li>\n        </ul>"
    },
    {
        "id": "lesson5",
        "title": "استعمال الأضواء",
        "icon": "fa-lightbulb",
        "content": "<ul class=\"lesson-list\">\n            <li><strong>أضواء الوضعية (الفيوز):</strong> تستعمل ليلا داخل مواطن عمران مضاءة وفي حالة الوقوف ليلا على معبد مظلم.</li>\n            <li><strong>أضواء المقاطعة (الكود):</strong> مسافتها 30 مترا على الأقل ولا تبهر البصر. تستعمل ليلا، وعند التقاطع مع عربة أخرى لتفادي إبهار السائق، وعند السير خلف عربة، وأثناء سوء الرؤية نهارا (مطر، ضباب) وداخل الأنفاق.</li>\n            <li><strong>أضواء الطريق (الفار):</strong> مسافتها 100 متر على الأقل وتكون مبهرة. تستعمل ليلا خارج مواطن العمران عندما تكون الطريق خالية. يجب الانتقال للمقاطعة عند رؤية عربة قادمة.</li>\n            <li><strong>أضواء الضباب:</strong> لا تُستعمل إطلاقا في الأوقات العادية، وتُقتصر في المطر الغزير، والضباب، وسقوط الثلج.</li>\n        </ul>"
    },
    {
        "id": "lesson6",
        "title": "العقوبات والمخالفات، الكحول وأحزمة الأمان",
        "icon": "fa-gavel",
        "content": "<ul class=\"lesson-list\">\n            <li><strong>الكحول:</strong> الحد الأقصى المسموح به هو 0.3 غرام في اللتر الواحد من الدم (0.0 غ/ل للسواق المتدربين والمحترفين). القيادة تحت تأثير الكحول تعتبر جنحة خطيرة وتسحب الرخصة، وتزيد من وقت رد الفعل وتقلص مجال الرؤية.</li>\n            <li><strong>حزام الأمان:</strong> إجباري على السائق والراكب الأمامي داخل مواطن العمران، وعلى جميع الركاب خارجها وفي الطريق السيارة. يحمي من الانقذاف خارج العربة ولا يمنع الحوادث بحد ذاته. عدم ربطه يعد مخالفة مرور صنف 3.</li>\n            <li><strong>الهاتف الجوال:</strong> يمنع منعا باتا استعماله باليد أثناء السياقة ويعد جنحة خطيرة.</li>\n            <li><strong>سحب النقاط:</strong> ينجر عن المخالفات الخطيرة (كالسرعة المفرطة والكحول وقطع الإشارة الحمراء) خصم نقاط مرورية من الرصيد والخطية المالية والسجن في بعض الحالات.</li>\n        </ul>"
    }
];

const quizData = [
    {
        "question": "ما هي السرعة القصوى المسموحة للسيارات الخفيفة في طريق سيارة في ظروف عادية؟",
        "options": [
            "110 كم/س",
            "90 كم/س",
            "70 كم/س"
        ],
        "correctIndex": 0,
        "explanation": "السرعة القصوى في طريق سيارة في ظروف عادية هي 110 كم/س."
    },
    {
        "question": "ما هي السرعة القصوى المسموحة للسيارات الخفيفة في طريق سيارة أثناء تهاطل الأمطار؟",
        "options": [
            "90 كم/س",
            "80 كم/س",
            "110 كم/س"
        ],
        "correctIndex": 0,
        "explanation": "السرعة القصوى في طريق سيارة أثناء تهاطل الأمطار هي 90 كم/س."
    },
    {
        "question": "ما هي السرعة القصوى المسموحة للسيارات الخفيفة في طريق عادية خارج مواطن العمران في ظروف عادية؟",
        "options": [
            "50 كم/س",
            "80 كم/س",
            "90 كم/س"
        ],
        "correctIndex": 2,
        "explanation": "السرعة القصوى في طريق عادية خارج مواطن العمران في ظروف عادية هي 90 كم/س."
    },
    {
        "question": "ما هي السرعة القصوى المسموحة للسيارات الخفيفة في طريق عادية خارج عمران أثناء المطر؟",
        "options": [
            "80 كم/س",
            "70 كم/س",
            "50 كم/س"
        ],
        "correctIndex": 1,
        "explanation": "السرعة القصوى في طريق عادية خارج عمران أثناء المطر هي 70 كم/س."
    },
    {
        "question": "ما هي السرعة القصوى المسموحة للسيارات الخفيفة في داخل مواطن العمران؟",
        "options": [
            "70 كم/س",
            "50 كم/س",
            "90 كم/س"
        ],
        "correctIndex": 1,
        "explanation": "السرعة القصوى في داخل مواطن العمران هي 50 كم/س."
    },
    {
        "question": "ما هي السرعة القصوى المسموحة للسيارات الخفيفة في سائق جديد في طريق سيارة؟",
        "options": [
            "80 كم/س",
            "70 كم/س",
            "90 كم/س"
        ],
        "correctIndex": 0,
        "explanation": "السرعة القصوى في سائق جديد في طريق سيارة هي 80 كم/س."
    },
    {
        "question": "ما هي مسافة التوقف التقريبية عند السير بسرعة 50 كم/س في طريق جافة؟",
        "options": [
            "15 متر",
            "25 متر",
            "45 متر"
        ],
        "correctIndex": 1,
        "explanation": "مسافة التوقف تحسب بضرب عشر السرعة في نفسه. (5 × 5 = 25 متر)."
    },
    {
        "question": "ما هي مسافة التوقف التقريبية عند السير بسرعة 70 كم/س في طريق جافة؟",
        "options": [
            "39 متر",
            "49 متر",
            "69 متر"
        ],
        "correctIndex": 1,
        "explanation": "مسافة التوقف تحسب بضرب عشر السرعة في نفسه. (7 × 7 = 49 متر)."
    },
    {
        "question": "ما هي مسافة التوقف التقريبية عند السير بسرعة 90 كم/س في طريق جافة؟",
        "options": [
            "71 متر",
            "81 متر",
            "101 متر"
        ],
        "correctIndex": 1,
        "explanation": "مسافة التوقف تحسب بضرب عشر السرعة في نفسه. (9 × 9 = 81 متر)."
    },
    {
        "question": "ما هي مسافة التوقف التقريبية عند السير بسرعة 110 كم/س في طريق جافة؟",
        "options": [
            "111 متر",
            "121 متر",
            "141 متر"
        ],
        "correctIndex": 1,
        "explanation": "مسافة التوقف تحسب بضرب عشر السرعة في نفسه. (11 × 11 = 121 متر)."
    },
    {
        "question": "ما هي مسافة الأمان التقريبية التي يجب تركها عند السير بسرعة 50 كم/س؟",
        "options": [
            "15 متر",
            "30 متر",
            "45 متر"
        ],
        "correctIndex": 1,
        "explanation": "لحساب مسافة الأمان، نضرب عشر السرعة في 6. (5 × 6 = 30 متر)."
    },
    {
        "question": "ما هي مسافة الأمان التقريبية التي يجب تركها عند السير بسرعة 70 كم/س؟",
        "options": [
            "27 متر",
            "42 متر",
            "57 متر"
        ],
        "correctIndex": 1,
        "explanation": "لحساب مسافة الأمان، نضرب عشر السرعة في 6. (7 × 6 = 42 متر)."
    },
    {
        "question": "ما هي مسافة الأمان التقريبية التي يجب تركها عند السير بسرعة 90 كم/س؟",
        "options": [
            "39 متر",
            "54 متر",
            "69 متر"
        ],
        "correctIndex": 1,
        "explanation": "لحساب مسافة الأمان، نضرب عشر السرعة في 6. (9 × 6 = 54 متر)."
    },
    {
        "question": "ما هي مسافة الأمان التقريبية التي يجب تركها عند السير بسرعة 110 كم/س؟",
        "options": [
            "51 متر",
            "66 متر",
            "81 متر"
        ],
        "correctIndex": 1,
        "explanation": "لحساب مسافة الأمان، نضرب عشر السرعة في 6. (11 × 6 = 66 متر)."
    },
    {
        "question": "لمن تعطى الأولوية في مفترق طرق بدون أي علامات مرورية؟",
        "options": [
            "للسيارة الأكبر حجما",
            "للسيارة القادمة من اليسار",
            "للسيارة القادمة من اليمين"
        ],
        "correctIndex": 2,
        "explanation": "القاعدة هي إعطاء الأولوية للسيارة القادمة من اليمين في مفترق طرق بدون أي علامات مرورية."
    },
    {
        "question": "لمن تعطى الأولوية في مفترق دوراني مجهز بعلامة 'ترك الأولوية'؟",
        "options": [
            "للسيارة الأسرع",
            "للسيارة الموجودة داخل المفترق",
            "للسيارة القادمة من اليسار"
        ],
        "correctIndex": 1,
        "explanation": "القاعدة هي إعطاء الأولوية للسيارة الموجودة داخل المفترق في مفترق دوراني مجهز بعلامة 'ترك الأولوية'."
    },
    {
        "question": "لمن تعطى الأولوية عند وجود سيارة أمن تستعمل المنبهات الصوتية أو الضوئية؟",
        "options": [
            "لسيارة الأمن مطلقا",
            "للسيارة الأكبر حجما",
            "للسيارة القادمة من اليسار"
        ],
        "correctIndex": 0,
        "explanation": "القاعدة هي إعطاء الأولوية لسيارة الأمن مطلقا عند وجود سيارة أمن تستعمل المنبهات الصوتية أو الضوئية."
    },
    {
        "question": "لمن تعطى الأولوية عند خروج سيارة من مسلك ترابي للدخول لطريق معبد؟",
        "options": [
            "للسيارة الأسرع",
            "للسيارات الموجودة على الطريق المعبدة",
            "للسيارة الأكبر حجما"
        ],
        "correctIndex": 1,
        "explanation": "القاعدة هي إعطاء الأولوية للسيارات الموجودة على الطريق المعبدة عند خروج سيارة من مسلك ترابي للدخول لطريق معبد."
    },
    {
        "question": "ماذا تعني علامة دائرة حمراء بداخلها خط أبيض أفقي؟",
        "options": [
            "ممنوع الدخول",
            "خطر غير معين",
            "الوقوف مسموح"
        ],
        "correctIndex": 0,
        "explanation": "هذه العلامة تدل على ممنوع الدخول."
    },
    {
        "question": "ماذا تعني علامة دائرة حمراء فارغة المضمون؟",
        "options": [
            "سرعة محددة",
            "ممنوع المرور في الاتجاهين",
            "الوقوف مسموح"
        ],
        "correctIndex": 1,
        "explanation": "هذه العلامة تدل على ممنوع المرور في الاتجاهين."
    },
    {
        "question": "ماذا تعني علامة قف مثمنة الشكل؟",
        "options": [
            "خطر غير معين",
            "الوقوف الإجباري التام وترك الأولوية",
            "سرعة محددة"
        ],
        "correctIndex": 1,
        "explanation": "هذه العلامة تدل على الوقوف الإجباري التام وترك الأولوية."
    },
    {
        "question": "ماذا تعني علامة زرقاء دائرية بداخلها سهم للأمام؟",
        "options": [
            "خطر غير معين",
            "اتجاه إجباري للأمام",
            "سرعة محددة"
        ],
        "correctIndex": 1,
        "explanation": "هذه العلامة تدل على اتجاه إجباري للأمام."
    },
    {
        "question": "ماذا تعني مثلث أحمر بداخله سكة حديدية؟",
        "options": [
            "الوقوف مسموح",
            "خطر غير معين",
            "تقاطع طريق مع سكة حديدية بدون حواجز"
        ],
        "correctIndex": 2,
        "explanation": "هذه العلامة تدل على تقاطع طريق مع سكة حديدية بدون حواجز."
    },
    {
        "question": "ما هي نسبة الكحول القصوى المسموح بها في الدم للسائقين المحترفين والمتدربين؟",
        "options": [
            "0.0 غ/ل (يمنع تماما)",
            "0.3 غ/ل",
            "0.5 غ/ل"
        ],
        "correctIndex": 0,
        "explanation": "بالنسبة للسواق الجدد وأصحاب الرخص الصنف د وج، يمنع قيادة العربة تحت تأثير الكحول تماما (0 غرام/لتر)."
    },
    {
        "question": "ما هي نسبة الكحول القصوى المسموح بها في الدم للسائقين العاديين؟",
        "options": [
            "0.3 غ/ل",
            "0.5 غ/ل",
            "0.8 غ/ل"
        ],
        "correctIndex": 0,
        "explanation": "الحد الأقصى القانوني هو 0.3 غ/ل في تونس، وأي تجاوز يعتبر مخالفة خطيرة."
    },
    {
        "question": "متى يجب استعمال أضواء المقاطعة بدلاً من أضواء الطريق ليلاً؟",
        "options": [
            "عند التقاطع مع مركبة أخرى لتجنب إبهار بصر السائق.",
            "في الطريق السيارة عندما تكون خالية تماماً.",
            "لا شيء، أبق دائماً أضواء الطريق."
        ],
        "correctIndex": 0,
        "explanation": "تستعمل أضواء المقاطعة عند التقاطع والاقتراب من مركبة أخرى من الخلف لتجنب إبهار بصر السواق الآخرين وخلال سوء الرؤية نهارا كالمطر."
    },
    {
        "question": "أضواء الضباب، هل يصح تشغيلها في الأوقات العادية الصافية ليلاً؟",
        "options": [
            "نعم، تزيد من الرؤية والوضوح.",
            "لا، يمنع استعمالها إلا في حال الضباب والمطر والثلج.",
            "نعم، إذا كانت أضواء الطريق غير كافية."
        ],
        "correctIndex": 1,
        "explanation": "أضواء الضباب مزعجة ومبهرة للآخرين، ولا تستعمل إلا في الطقس السيء مثل الضباب والثلج أو المطر الغزير."
    },
    {
        "question": "ما هو أول إجراء يجب القيام به عند التواجد في مكان حادث مرور؟",
        "options": [
            "نقل المصابين بسرعة بسيارتك.",
            "حماية مكان الحادث عبر وضع مثلث العطب وتشغيل أضواء الخطر.",
            "البدء فورا بتصوير الحادث."
        ],
        "correctIndex": 1,
        "explanation": "أول خطوة في الإسعاف هي حماية مكان الحادث لتجنب اصطدامات مفاجئة إضافية متسلسلة."
    },
    {
        "question": "في حالة وجود نزيف دموي قوي لمصاب، ماذا يجب أن تفعل؟",
        "options": [
            "وضع مرهم مسكن ومسح الدم.",
            "الضغط المباشر على موضع النزيف لوقفه.",
            "تركه حتى وصول الإسعاف وتجنب لمسه."
        ],
        "correctIndex": 1,
        "explanation": "يجب الضغط المباشر على الجرح بضمادة أو قماش نظيف لمحاولة إيقاف أو تقليل النزيف القوي فورا نظرا لخطورة النزيف."
    },
    {
        "question": "عدم احترام علامة قف يعتبر:",
        "options": [
            "مخالفة عادية.",
            "جنحة خطيرة ينجر عنها سحب الرخصة.",
            "مخالفة من الصنف الأول ولا تسحب منها الرخصة."
        ],
        "correctIndex": 1,
        "explanation": "عدم الوقوف عند علامة 'قف' يعتبر جنحة مرورية خطيرة تؤدي إلى خطية مالية وتسحب الرخصة وسحب نقاط المخالفات."
    },
    {
        "question": "استعمال الهاتف الجوال باليد أثناء السياقة يعاقب عليه بـ:",
        "options": [
            "خطية مالية ومخالفة خطيرة.",
            "السجن مباشرة وصمة عار.",
            "لا شيء إذا كان السائق محترفا."
        ],
        "correctIndex": 0,
        "explanation": "استعمال الهاتف الجوال باليد أثناء السياقة هو مخالفة خطيرة تنجر عنها خطية مالية هامة وتصل لخصم نقاط."
    },
    {
        "question": "عند الوقوف الإجباري بسبب عطب في السيارة على الطريق السريعة، ماذا يجب أن تفعل؟",
        "options": [
            "ركن السيارة في شريط الوقوف الاضطراري، تشغيل أضواء الخطر ووضع مثلث العطب.",
            "الوقوف في منتصف الطريق ومحاولة التصليح.",
            "البقاء داخل السيارة دون فعل شيء وانتظار الفرج."
        ],
        "correctIndex": 0,
        "explanation": "شريط الوقوف الاضطراري وجد خصيصا للوقوف الإجباري، مع ضرورة إشعار مستعملي الطريق الآخرين بوضع أضواء العطب."
    },
    {
        "question": "ماهو السلوك السليم قبل القيام بالمجاوزة؟",
        "options": [
            "الزيادة في السرعة فوراً والتجاوز دون النظر للخلف.",
            "التأكد من خلو الطريق، تشغيل الغماز (الإشارة الضوئية)، ثم التجاوز من اليسار.",
            "إمرار اليد من النافذة للتنبيه بالمرور."
        ],
        "correctIndex": 1,
        "explanation": "ينبغي دائماً فحص المرايا والتأكد من توفر مسافة الرؤية وتشغيل غماز تغيير المسار الأيسر، المجاوزة تتم دوما من اليسار."
    },
    {
        "question": "شرب الكحول بنسبة تفوق النصاب القانوني يؤثر على السياقة بـ:",
        "options": [
            "تقليل وقت رد الفعل (يصبح أسرع).",
            "المساعدة في التركيز على المنعرجات الصعبة.",
            "تقليص مجال الرؤية وتطويل وقت رد الفعل وزيادة المجازفة والتهور."
        ],
        "correctIndex": 2,
        "explanation": "الكحول يخلق إحساسا زائفا بالثقة ولكنه في الواقع يعيق الحواس وردود الأفعال ويقلل زاوية وضوح الرؤية."
    },
    {
        "question": "ما هو دور حزام الأمان؟",
        "options": [
            "منع السائق والركاب من الانقذاف خارج السيارة أو الارتطام بالبلور والمقود عند الاصطدام العنيف.",
            "لتجنب الخطايا المالية ورجال الأمن فحسب.",
            "لتثبيت الكرسي وراحة الظهر في السفر الطويل."
        ],
        "correctIndex": 0,
        "explanation": "حزام الأمان هو عتاد سلامة هدفه الإبقاء على الجسم مثبتا لحمايته من الصدمات والارتطام المميت بأجزاء وقمرة العربة."
    },
    {
        "question": "الرجوع لخلف (Marche arrière) في الطريق السيارة:",
        "options": [
            "مسموح إلا في حالة الضرورة القصوى المبررة.",
            "ممنوع منعاً باتاً لأي سبب من الأسباب.",
            "مسموح به للرجوع لخرجة فائتة فقط لمسافة أمتار."
        ],
        "correctIndex": 1,
        "explanation": "الرجوع للخلف والقيام بنصف دورة مجرم في الطرقات السيارة حيث تسير السيارات بسرعة تفوق 110كم/س والاصطدام حتمي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (1)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (2)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (3)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (4)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (5)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (6)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (7)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (8)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (9)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (10)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (11)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (12)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (13)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (14)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (15)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (16)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (17)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (18)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (19)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (20)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (21)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (22)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (23)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (24)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (25)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (26)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (27)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (28)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (29)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (30)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (31)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (32)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (33)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (34)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (35)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (36)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (37)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (38)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (39)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (40)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (41)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (42)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (43)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (44)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (45)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (46)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (47)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (48)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (49)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (50)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (51)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (52)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (53)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (54)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (55)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (56)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (57)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (58)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (59)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (60)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (61)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (62)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (63)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (64)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (65)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (66)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (67)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (68)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (69)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (70)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (71)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (72)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (73)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (74)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (75)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (76)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (77)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (78)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (79)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (80)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (81)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (82)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (83)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (84)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (85)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (86)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (87)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (88)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (89)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (90)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (91)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (92)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (93)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (94)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (95)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (96)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (97)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (98)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (99)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (100)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (101)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (102)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (103)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (104)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (105)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (106)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (107)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (108)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (109)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (110)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (111)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (112)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (113)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (114)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (115)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (116)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (117)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (118)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (119)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (120)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (121)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (122)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (123)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (124)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (125)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (126)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (127)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (128)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (129)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (130)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (131)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (132)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (133)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (134)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (135)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (136)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (137)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (138)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (139)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (140)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (141)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (142)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (143)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (144)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (145)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (146)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (147)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (148)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (149)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (150)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    },
    {
        "question": "عند السياقة في المرتفعات، هل يجوز المجاوزة إذا كانت الرؤية محجوبة؟ (151)",
        "options": [
            "نعم، إذا كان السائق موهوبا",
            "لا، يمنع ذلك تماما",
            "فقط إذا استعمل أضواء الطريق"
        ],
        "correctIndex": 1,
        "explanation": "المجاوزة تتطلب توفر رؤية خالية واضحة لمسافات طويلة وهذا مفقود في المرتفعات مما يشكل موتا محققا."
    },
    {
        "question": "ما هي المدة المحددة للفحص الفني الدوري للسيارات الخاصة التي يتجاوز عمرها 3 سنوات؟ (152)",
        "options": [
            "كل سنة بصفة دورية",
            "كل 6 أشهر",
            "كل 3 سنوات متتالية"
        ],
        "correctIndex": 0,
        "explanation": "بليوغ عمر السيارة 3+ سنوات، يصبح عرضها على مهندسي الفحص الفني دوريا كل سنة شرطا أساسيا للجولان."
    },
    {
        "question": "السياقة بدون رخصة سياقة متطابقة ومناسبة للصنف تعتبر: (153)",
        "options": [
            "جنحة مستوجبة لعقوبة سجنية وتخطئة مالية كبيرة.",
            "مخالفة عادية مالية بسيطة.",
            "غير مهم ما دام يستطيع السياقة عمليا."
        ],
        "correctIndex": 0,
        "explanation": "القانون حاسم؛ فكل قيادة لعربة يشترط لها رخصة، والقيادة من دونها هي جنحة تستوجب ردعا جزائيا وسجنا وغرامات."
    },
    {
        "question": "الضوء الأخضر الرفاف (الكليونيون) في مفترق الطرق يعني: (154)",
        "options": [
            "السماح بالمرور المطلق للأبد.",
            "الإعلام بالانتقال الوشيك للبرتقالي، يجب الاستعداد والحذر وتوقع الوقوف.",
            "الوقوف الفوري القاطع."
        ],
        "correctIndex": 1,
        "explanation": "الاصفر الرفاف والضوء الأخضر الرفاف رسالة تحذير مسبق بوجوب الانتباه أن الإشارة ستتحول للأحمر قريبا."
    },
    {
        "question": "للتنبيه ليلا خارج مواطن العمران لحادث، أين يجب وضع مثلث العطب بدقة؟ (155)",
        "options": [
            "خلف السيارة بـ 30 متر على الأقل لتأمين مسافة كبح للعربات القادمة.",
            "فوق غطاء محرك السيارة بوضوح.",
            "أمام العربة للسيارات المقابلة."
        ],
        "correctIndex": 0,
        "explanation": "في الطرقات التي يسمح فيها بسرعة 90 كم/س، تحتاج السيارات مسافة لتنظر ثم تدرك وتستجيب وتلجأ للكبح، وهذا دور المثلث ال 30م."
    },
    {
        "question": "أثناء الدوران لليسار في مفترق دون علامات، لمن تترك قانونا الأولوية؟ (156)",
        "options": [
            "للعربات القادمة من اليمين وللعربات القادمة من الاتجاه المعاكس مباشرة.",
            "للعربات القادمة من اليسار.",
            "للمترجلين الموازين لاتجاهي فقط ولنفسي."
        ],
        "correctIndex": 0,
        "explanation": "بدون علامات فاليمنون أولى، والدوران لليسار يستوجب قطع طريق المعاكسين الذين يسيرون إلى الأمام فهم أولى بالعبور قبلنا."
    },
    {
        "question": "ما هو لون الخطوط التي تحدد أماكن وقوف السيارات بمقابل (بالمأوى ذو الوقت المحدود المدفوع)؟ (157)",
        "options": [
            "خطوط صفراء متواصلة.",
            "أبيض متقطع للتوقف.",
            "أزرق يمثل ركن محدود مدفوع ومأهول."
        ],
        "correctIndex": 2,
        "explanation": "تعديل بلديات المدن مناطق الوقوف بمقابل مالي ويشار لمعالم هذه الأرصفة والمآوي دهنا باللون الأزرق لتمييزها."
    },
    {
        "question": "متى يُسمح شرعا للمجاوزة من اليمين، وهي في الأساس ممنوعة؟ (158)",
        "options": [
            "نعم، إذا كانت العربة الأمامية يسارية وأعلنت انحيازها نحو الدوران من اليسار بغمازها.",
            "لا، المجاوزة من اليمين ممنوعة مطلقا حتى للمدرعات.",
            "أنتظر خلفها ولو توقفت تماما."
        ],
        "correctIndex": 0,
        "explanation": "هذا هو الاستثناء الوحيد في الكود لـ المجاوزة من اليمين، حيث تمنحك السيارة البطيئة بغمازها إذن المرور من الزاوية الفارغة يمينا."
    },
    {
        "question": "طول مسافة رد الفعل، أي فترة الثانية الفاصلة بين الإدراك والاستجابة، تتعلق بـ: (159)",
        "options": [
            "حالة الفرامل والطوق والإطارات الممسكة.",
            "حالة الطقس و حالة العجلات وزوايا الميلان.",
            "حالة السائق البدنية والنفسية ومستوى يقظته العصبية وكحوله."
        ],
        "correctIndex": 2,
        "explanation": "قبل أن تدوس على الفرامل وتشتعل الآلة، عقل السائق يقوم بمعالجة الخطر (ثانية 1)، وهي التي تتأثر جدا بالتعب والمسكرات وعمره."
    },
    {
        "question": "العقوبات المترتبة عن مخالفة عدم استعمال حزام الأمان تهمينيا: (160)",
        "options": [
            "مخالفة مرورية من الصنف الثالث وتسحب على إثرها نقاط من رخصة القيادة.",
            "السجن من دون نقاش.",
            "توبيخ ونصيحة بسيطة."
        ],
        "correctIndex": 0,
        "explanation": "حماية الأشخاص إجبارية في تونس وفق الأمر الحكومي، وسيعرض السائق لمخالفة مالية حينية وخصم مباشر لأرصدة نقاطه كإجراء تأديبي."
    }
];
