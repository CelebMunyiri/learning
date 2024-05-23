using System;

public class Program
{
    public static bool IsMultiple(int num, int divisor)
    {
        return num % divisor ==0;
    }

    public static void Main()
    {
        int number=15;
        int div=3;

        if(IsMultiple(number,div)){
            Console.WriteLine($"{number} is a multiple of {div}")
        }
    }

}