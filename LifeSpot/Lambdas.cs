﻿using System;
using System.Text;

namespace LifeSpot
{
    class Lambdas  
    {
        protected delegate void Printer();
     
        public virtual void Test()
        {
            Console.OutputEncoding = Encoding.Unicode;
            
            int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            
            Print(numbers, () => { Console.WriteLine("Ура! Нашел четное число!"); }); 
        }

        protected static void Print(int[] numbers, Printer func)
        {
            foreach (var i in numbers)
            {
                if (i % 2 == 0)
                    func(); 
            }
        }
    }
}