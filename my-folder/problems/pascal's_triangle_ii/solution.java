class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<List<Integer>> triangle = new ArrayList<>();
        List<Integer> currRow = new ArrayList<>();
        if(rowIndex == 0)
        {
            currRow.add(1);
            return currRow;
        }
        if(rowIndex == 1)
        {
            currRow.add(1);
            currRow.add(1);
            return currRow;
        }
        if(rowIndex > 1)
        {
            for(int i = 1; i <=33; i++)
            {
                List<Integer> temp = new ArrayList<>();
                temp.add(1);
                for(int j = 0; j < currRow.size()-1;j++)
                {
                    temp.add(currRow.get(j)+ currRow.get(j+1));
                }
                temp.add(1);
                triangle.add(temp);
                currRow = temp;
            }
        }
        
        return triangle.get(rowIndex-1);
        
    }
}