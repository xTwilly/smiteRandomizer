package randomizer;

public class Freya extends godClass{ 
    public Freya() {
    	 this.role = "ADC";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Freya test = new Freya();
    System.out.println(test.getDamageType());
    }
}
