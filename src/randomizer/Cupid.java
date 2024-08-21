package randomizer;

public class Cupid extends godClass{ 
    public Cupid() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Cupid test = new Cupid();
    System.out.println(test.getDamageType());
    }
}
