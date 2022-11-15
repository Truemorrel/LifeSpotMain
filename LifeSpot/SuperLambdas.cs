using System.Text;
using System;

namespace LifeSpot
{
    class SuperLambdas : Lambdas
    {
        // переопределим метод Test() - полиморфизм в действии
        public override void Test()
        {
            Console.OutputEncoding = Encoding.Unicode;

            int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

            Print(numbers, () =>
            {
                Console.ForegroundColor = ConsoleColor.Blue;
                Console.WriteLine("Ура! Нашел четное число!");
            });
        }
    }
}
