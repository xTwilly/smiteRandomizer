package randomizer;

public class Rama extends godClass{ 
    public Rama() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Rama test = new Rama();
    System.out.println(test.getDamageType());
    }
}
