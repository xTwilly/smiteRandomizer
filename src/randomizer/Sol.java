package randomizer;

public class Sol extends godClass{ 
    public Sol() {
    	 this.role = "ADC";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Sol test = new Sol();
    System.out.println(test.getDamageType());
    }
}
