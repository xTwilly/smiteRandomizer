package randomizer;

public class Cernunnos extends godClass{ 
    public Cernunnos() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Cernunnos test = new Cernunnos();
    System.out.println(test.getDamageType());
    }
}
