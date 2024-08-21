package randomizer;

public class Neith extends godClass{ 
    public Neith() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Neith test = new Neith();
    System.out.println(test.getDamageType());
    }
}
