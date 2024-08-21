package randomizer;

public class Chronos extends godClass{ 
    public Chronos() {
    	 this.role = "ADC";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Chronos test = new Chronos();
    System.out.println(test.getDamageType());
    }
}
