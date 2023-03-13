import java.util.*;
public class Main{
	public static void main(String args[]){
		Scanner sc = new Scanner(System.in);
		int a, b;
		a = sc.nextInt();
		b = sc.nextInt();
		System.out.println(a + b);
	}
}

/* solution-2
import java.util.*;
public class Main{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        String[] arr = input.split(" ");
        System.out.println(Integer.parseInt(arr[0])+Integer.parseInt(arr[1]));
    }
} */
/* solution-3
import java.util.*;
public class Main{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        String[] arr = input.split(" ");
        int[] newArr = new int[arr.length];
        for(int i=0; i<newArr.length; i++)
            newArr[i] = Integer.parseInt(arr[i]);
        System.out.println(newArr[0]+newArr[1]);
    }
} 
*/