package randomizer;

public class The_Morrigan extends godClass{ 
    public The_Morrigan() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    The_Morrigan test = new The_Morrigan();
    System.out.println(test.getDamageType());
    }
}
