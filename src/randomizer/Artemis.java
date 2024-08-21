package randomizer;

public class Artemis extends godClass{ 
    public Artemis() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Artemis test = new Artemis();
    System.out.println(test.getDamageType());
    }
}
