package randomizer;

public class Medusa extends godClass{ 
    public Medusa() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Medusa test = new Medusa();
    System.out.println(test.getDamageType());
    }
}
