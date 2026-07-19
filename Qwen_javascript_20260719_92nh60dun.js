// هذا الملف يحتوي على بياناتك الحقيقية من ملفات PDF
// استبدل البيانات التجريبية ببياناتك الفعلية

const REAL_DATA = [
  {
    part_code: "012655-0001",
    part_name_en: "OIL FILTER ELEMENT",
    part_name_ar: "عنصر فلتر الزيت",
    model: "TT75",
    branch: "05MISP",
    shelf_location: "Q-13-2",
    quantity: 15,
    price_without_vat: 38350
  },
  // ... أضف باقي القطع هنا
];

// تحويل البيانات وحساب الضريبة
function importRealData() {
  const processed = REAL_DATA.map(p => ({
    ...p,
    price_with_vat: Math.round(p.price_without_vat * 1.17)
  }));
  localStorage.setItem('partsData', JSON.stringify(processed));
  location.reload();
}

// لتشغيل الاستيراد: افتح Console في المتصفح واكتب: importRealData()