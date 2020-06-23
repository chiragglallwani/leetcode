class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> pascalTriangle = new ArrayList<>(numRows);
        List<Integer> list1 = new ArrayList<>(); //row 1
        list1.add(1);
       
        List<Integer> list2 = new ArrayList<>(); //row numrows-1
        list2.add(1);
        list2.add(1);
       
        
        
        if(numRows == 1){
             pascalTriangle.add(list1);
        }
        else if(numRows == 2)
        {
            pascalTriangle.add(list1);
            pascalTriangle.add(list2);
        }
        
        if(numRows > 2)
        {
            pascalTriangle.add(list1);
            pascalTriangle.add(list2);
            for(int i = 3; i <= numRows; i++)
            {
                List<Integer> templist = new ArrayList<>();
                templist.add(1);
                for(int j = 0; j < list2.size()-1; j++)
                {
                    templist.add(list2.get(j) + list2.get(j+1));
                }
                templist.add(1);
                 pascalTriangle.add(templist);
                list2 = templist;
            }
           
        }
        /*else{
            if(numRows == 1){
                pascalTriangle.add(list1);
            }
            else if(numRows == 2){
                 pascalTriangle.add(list2);
            }
           
        }*/
        
        return pascalTriangle;
    }
}