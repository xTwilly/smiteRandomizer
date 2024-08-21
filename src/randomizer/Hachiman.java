package randomizer;

public class Hachiman extends godClass{ 
    public Hachiman() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Hachiman test = new Hachiman();
    System.out.println(test.getDamageType());
    }
}
