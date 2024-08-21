package randomizer;

public class Chiron extends godClass{ 
    public Chiron() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Chiron test = new Chiron();
    System.out.println(test.getDamageType());
    }
}
