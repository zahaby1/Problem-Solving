

/**
 * @param {Function} fn
 * @return {Function}
 */
// 1️⃣ الكاش: key → value بنغزن المتغيرات بدقه وبنفس الترتيب والناتج بتاعهم
// 2️⃣ نرجّع دالة جديدة (closure) بحفظ الراجع فى متغير واضيفه فى الكاش لو مش موجود
// 3️⃣ نحول الـ arguments لمفتاح مميز
// 4️⃣ لو القيمة موجودة في الكاش → نرجعها
// 5️⃣ لو مش موجودة → نشغّل الدالة الأصلية
// 6️⃣ نخزّن النتيجة في الكاش
// 7️⃣ نرجّع النتيجة


function memoize(fn) {
    const cache = {};

    return function (...args) {

        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn(...args);

        cache[key] = result;

        return result;
    };
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */