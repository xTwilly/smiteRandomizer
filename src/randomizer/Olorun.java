package randomizer;

public class Olorun extends godClass{ 
    public Olorun() {
    	 this.role = "ADC";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Olorun test = new Olorun();
    System.out.println(test.getDamageType());
    }
}
