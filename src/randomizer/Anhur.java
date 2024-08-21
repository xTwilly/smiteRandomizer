package randomizer;

public class Anhur extends godClass{ 
    public Anhur() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Anhur test = new Anhur();
    System.out.println(test.getDamageType());
    }
}
