using System;

public class Program{

    public static int returnDiagonalDifferebce(ListList<int>> arr){
    int sum=0;
    int sum2=0;
                for(int i=0; i<arr.Length;i++){
                    sum+=arr[i][i];
                    sum2+=arr[i][arr[i].Length-1-i];

                }
                return Math.Abs(sum-sum2);

    

}
}