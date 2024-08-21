package randomizer;

public class Heimdallr extends godClass{ 
    public Heimdallr() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Heimdallr test = new Heimdallr();
    System.out.println(test.getDamageType());
    }
}
