class Solution {
    public int xorOperation(int n, int start) {
        int[] arr = new int[n];
        for(int i = 0; i< n; i++) //storing the elements in array
        {
            arr[i] = start + 2*i;
        }
        
        //elements stored;
        
        int x = 0; //XOR for elemts in array
        
        for(int i = 0; i< n; i++){
            x ^= arr[i]; //getting the xOR operator;
        }
        
        return x;
    }
}