import dias from "../assets/dias.jpg";

export default function Dias() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center max-w-md">

        <img
          src={dias}
          className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white"
        />

        <h2 className="text-2xl font-bold mt-4">Dias</h2>

        <p className="opacity-80">Teknik Informatika</p>

        <p className="mt-4 text-sm">
          Saya tertarik pada backend development dan sistem database Saya tertarik pada backend development dan sistem database Saya tertarik pada backend development dan sistem database karena keduanya berperan penting dalam menjalankan logika aplikasi dan mengelola data. Saya ingin mempelajari cara membangun sistem yang efisien, aman, dan terstruktur, serta memahami bagaimana data disimpan, diproses, dan digunakan dalam aplikasi. Dengan itu, saya berharap dapat mengembangkan aplikasi yang stabil dan memiliki performa yang baik.
          
        </p>

      </div>
    </div>
  );
}